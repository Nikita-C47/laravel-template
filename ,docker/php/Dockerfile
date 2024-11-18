FROM php:8.2-fpm-alpine

RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"

RUN apk add --update --no-cache \
        postgresql-dev \
        composer \
        npm \
    && docker-php-ext-install \
        pdo_pgsql
