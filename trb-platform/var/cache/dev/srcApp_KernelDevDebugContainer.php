<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerEmAsFTG\srcApp_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerEmAsFTG/srcApp_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerEmAsFTG.legacy');

    return;
}

if (!\class_exists(srcApp_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerEmAsFTG\srcApp_KernelDevDebugContainer::class, srcApp_KernelDevDebugContainer::class, false);
}

return new \ContainerEmAsFTG\srcApp_KernelDevDebugContainer([
    'container.build_hash' => 'EmAsFTG',
    'container.build_id' => '2f4e1372',
    'container.build_time' => 1566213025,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerEmAsFTG');
