# 1. Використовуємо офіційний базовий образ Node.js
FROM node:18

# 2. Встановлюємо робочу директорію
WORKDIR /app

# 3. Копіюємо package.json і package-lock.json
COPY package*.json ./

# 4. Встановлюємо залежності
RUN npm install

# 5. Копіюємо весь код проєкту в контейнер
COPY . .

# Генерація клієнта Prisma
RUN npx prisma generate
# 6. Відкриваємо порт (наприклад, 5000)
EXPOSE 5000

# 7. Встановлюємо змінні оточення для роботи з .env
ENV NODE_ENV=production

# 8. Запускаємо сервер
CMD ["node", "index.js"]
