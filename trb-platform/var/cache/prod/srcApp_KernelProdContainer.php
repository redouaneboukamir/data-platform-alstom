<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerPUxQR3q\srcApp_KernelProdContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerPUxQR3q/srcApp_KernelProdContainer.php') {
    touch(__DIR__.'/ContainerPUxQR3q.legacy');

    return;
}

if (!\class_exists(srcApp_KernelProdContainer::class, false)) {
    \class_alias(\ContainerPUxQR3q\srcApp_KernelProdContainer::class, srcApp_KernelProdContainer::class, false);
}

return new \ContainerPUxQR3q\srcApp_KernelProdContainer([
    'container.build_hash' => 'PUxQR3q',
    'container.build_id' => '9cd4ba00',
    'container.build_time' => 1565599988,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerPUxQR3q');
