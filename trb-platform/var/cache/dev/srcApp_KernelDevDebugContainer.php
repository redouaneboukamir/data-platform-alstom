<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerUEWNTs4\srcApp_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerUEWNTs4/srcApp_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerUEWNTs4.legacy');

    return;
}

if (!\class_exists(srcApp_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerUEWNTs4\srcApp_KernelDevDebugContainer::class, srcApp_KernelDevDebugContainer::class, false);
}

return new \ContainerUEWNTs4\srcApp_KernelDevDebugContainer([
    'container.build_hash' => 'UEWNTs4',
    'container.build_id' => '9832e920',
    'container.build_time' => 1564756431,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerUEWNTs4');
