# Build Phase
FROM node:20.5.1-bookworm-slim as builder

WORKDIR /usr/frontend/app

RUN chown -R node:node /usr/frontend/app/

COPY ./package*.json /usr/frontend/app/
RUN npm ci

USER node

# copy rest of files
COPY --chown=node:node . .

RUN npm run build

# Run phase
FROM nginx:1.25.2-alpine-slim

COPY --from=builder /usr/frontend/app/dist /usr/share/nginx/html

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]