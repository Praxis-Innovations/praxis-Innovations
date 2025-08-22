# Dedicated Dockerfile for Next.js applications
# Optimized for Next.js with support for standalone builds and static exports
# Uses Node.js runtime for Next.js server

ARG NODE_VERSION=18
ARG BUILD_OUTPUT_DIR=.next
ARG PORT=3000
ARG YARN_VERSION=1.x
ARG ENABLE_YARN_BERRY=false
ARG START_COMMAND=yarn start

FROM node:${NODE_VERSION}-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json yarn.lock* .yarnrc.yml .yarnrc* ./

# Setup Yarn based on version
RUN if [ "$ENABLE_YARN_BERRY" = "true" ]; then \
        corepack enable; \
        yarn set version ${YARN_VERSION}; \
    fi

# Install dependencies
RUN if [ "$ENABLE_YARN_BERRY" = "true" ]; then \
        yarn install --immutable; \
    else \
        yarn install --frozen-lockfile --prefer-offline; \
    fi

# Build stage
FROM base AS builder
WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/.yarn ./.yarn

# Copy source code
COPY . .

# Build the Next.js application
ARG BUILD_OUTPUT_DIR
RUN yarn build

# For Next.js, also run export if standalone is not configured
RUN if ! grep -q '"standalone"' package.json; then \
        yarn export || echo "Export not available, using standard build"; \
    fi

# Production stage - Node.js for Next.js server
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs

# Copy built application
ARG BUILD_OUTPUT_DIR
COPY --from=builder --chown=nodejs:nodejs /app/${BUILD_OUTPUT_DIR} ./${BUILD_OUTPUT_DIR}
COPY --from=builder --chown=nodejs:nodejs /app/package.json ./package.json

# Copy node_modules for production dependencies only
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules

# Copy Yarn files if using Yarn Berry
ARG ENABLE_YARN_BERRY
RUN if [ "$ENABLE_YARN_BERRY" = "true" ]; then \
        mkdir -p .yarn; \
        cp -r /app/.yarn ./.yarn; \
    fi

# Copy public directory if it exists
RUN if [ -d /app/public ]; then \
        mkdir -p public; \
        cp -r /app/public/* ./public/; \
    fi

# Copy standalone build if available
RUN if [ -d /app/.next/standalone ]; then \
        cp -r /app/.next/standalone/* ./; \
        cp -r /app/.next/static ./.next/static; \
    fi

# Switch to non-root user
USER nodejs

# Expose the specified port
ARG PORT
EXPOSE ${PORT}

# Start command - check if standalone build is available
ARG START_COMMAND
CMD if [ -f server.js ]; then \
        node server.js; \
    else \
        ${START_COMMAND}; \
    fi
