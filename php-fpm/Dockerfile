#FROM php:7.3-alpine

#COPY . /var/www/app

#WORKDIR /var/www/app

#CMD php -S 0.0.0.0:80 public/index.php
FROM php:7.2-fpm-alpine

#RUN echo 'Acquire::http::proxy "http://185.46.212.88:80/";' > /etc/apt/apt.conf
RUN set -ex \
	&& apk --no-cache add postgresql-libs postgresql-dev \
	&& docker-php-ext-install pdo pgsql pdo_pgsql \
	&& apk del postgresql-dev
RUN apk update \
    && apk add  --no-cache git curl libmcrypt libmcrypt-dev openssh-client icu-dev \
    libxml2-dev freetype-dev libpng-dev libjpeg-turbo-dev g++ make autoconf \
    && docker-php-source extract \
    && pecl install xdebug redis \
    && docker-php-ext-enable xdebug redis \
    && docker-php-source delete \
    && rm -rf /tmp/*

CMD ["php-fpm", "-F"]

WORKDIR /var/www/trb-platform

EXPOSE 9000