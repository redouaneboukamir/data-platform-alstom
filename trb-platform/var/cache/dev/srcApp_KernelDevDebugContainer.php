<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerROCuqBp\srcApp_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerROCuqBp/srcApp_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerROCuqBp.legacy');

    return;
}

if (!\class_exists(srcApp_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerROCuqBp\srcApp_KernelDevDebugContainer::class, srcApp_KernelDevDebugContainer::class, false);
}

return new \ContainerROCuqBp\srcApp_KernelDevDebugContainer([
    'container.build_hash' => 'ROCuqBp',
    'container.build_id' => '4b6b9372',
    'container.build_time' => 1564585800,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerROCuqBp');
