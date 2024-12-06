# Sử dụng Node.js phiên bản LTS
FROM node:20

# Đặt thư mục làm việc
WORKDIR /app

# Sao chép các tệp cần thiết
COPY package*.json ./

# Cài đặt dependencies với tùy chọn xử lý xung đột nếu cần
RUN npm install --legacy-peer-deps

# Sao chép mã nguồn vào image
COPY . .

# Sao chép file môi trường (nếu cần)
COPY .env.sample .env

# Mở cổng cho ứng dụng
EXPOSE 4040 3030 3032 3033

RUN npm install -g concurrently

CMD ["npm", "run", "start:all"]
