<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerWpySnfi\srcApp_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerWpySnfi/srcApp_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerWpySnfi.legacy');

    return;
}

if (!\class_exists(srcApp_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerWpySnfi\srcApp_KernelDevDebugContainer::class, srcApp_KernelDevDebugContainer::class, false);
}

return new \ContainerWpySnfi\srcApp_KernelDevDebugContainer([
    'container.build_hash' => 'WpySnfi',
    'container.build_id' => '7daf110f',
    'container.build_time' => 1565274215,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerWpySnfi');
