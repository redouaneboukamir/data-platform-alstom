FROM php:7.3-alpine

COPY . /var/www/app

WORKDIR /var/www/app

CMD php -S 0.0.0.0:80 public/index.php