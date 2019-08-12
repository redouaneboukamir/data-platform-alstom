<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInita13c9606b0436bd2d6422a604077f15f
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Symfony\\Component\\Finder\\' => 25,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Symfony\\Component\\Finder\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/finder',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInita13c9606b0436bd2d6422a604077f15f::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInita13c9606b0436bd2d6422a604077f15f::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
