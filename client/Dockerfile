# 1. Базовий образ Node.js для збірки
FROM node:18 AS build

# 2. Встановлюємо робочу директорію
WORKDIR /app

# 3. Копіюємо package.json і package-lock.json
COPY package*.json ./

# 4. Встановлюємо залежності
RUN npm install

# 5. Копіюємо весь код у робочу директорію
COPY . .

# 6. Збираємо додаток за допомогою Vite
RUN npm run build

# 7. Базовий образ для статичних файлів
FROM nginx:alpine

# 8. Копіюємо збірку у папку Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# 9. Відкриваємо порт
EXPOSE 80

# 10. Запускаємо Nginx
CMD ["nginx", "-g", "daemon off;"]
