<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerX9Rcus5\srcApp_KernelProdContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerX9Rcus5/srcApp_KernelProdContainer.php') {
    touch(__DIR__.'/ContainerX9Rcus5.legacy');

    return;
}

if (!\class_exists(srcApp_KernelProdContainer::class, false)) {
    \class_alias(\ContainerX9Rcus5\srcApp_KernelProdContainer::class, srcApp_KernelProdContainer::class, false);
}

return new \ContainerX9Rcus5\srcApp_KernelProdContainer([
    'container.build_hash' => 'X9Rcus5',
    'container.build_id' => '1edb2e0c',
    'container.build_time' => 1560752151,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerX9Rcus5');