# Production Dockerfile for Next.js with Bun
# TODO: Consider using multi-stage build to speed up build times:
#   - Stage 1: Install dependencies (cached separately)
#   - Stage 2: Build application
#   - Stage 3: Copy only production files to minimal final image
FROM oven/bun:latest

WORKDIR /app

# Copy package files and install dependencies
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# Copy source code and build
COPY . .
RUN bun run build

# Set environment variables
ENV NODE_ENV=production
ENV PORT=8080
ENV HOSTNAME="0.0.0.0"

EXPOSE 8080

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD bun -e "fetch('http://localhost:8080/api/health').then(r => r.ok ? process.exit(0) : process.exit(1)).catch(() => process.exit(1))"

# Production: run the application
CMD ["bun", "run", "server.js"]
