FROM node:25-slim AS builder

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:25-slim AS runtime

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/package*.json ./

EXPOSE 5555

CMD ["npm", "run", "start"]