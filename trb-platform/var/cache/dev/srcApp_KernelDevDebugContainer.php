<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerOvUmdfi\srcApp_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerOvUmdfi/srcApp_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerOvUmdfi.legacy');

    return;
}

if (!\class_exists(srcApp_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerOvUmdfi\srcApp_KernelDevDebugContainer::class, srcApp_KernelDevDebugContainer::class, false);
}

return new \ContainerOvUmdfi\srcApp_KernelDevDebugContainer([
    'container.build_hash' => 'OvUmdfi',
    'container.build_id' => 'dbf5a97f',
    'container.build_time' => 1566547337,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerOvUmdfi');
