<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerXxCcnnW\srcApp_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerXxCcnnW/srcApp_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerXxCcnnW.legacy');

    return;
}

if (!\class_exists(srcApp_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerXxCcnnW\srcApp_KernelDevDebugContainer::class, srcApp_KernelDevDebugContainer::class, false);
}

return new \ContainerXxCcnnW\srcApp_KernelDevDebugContainer([
    'container.build_hash' => 'XxCcnnW',
    'container.build_id' => '7a64d9d4',
    'container.build_time' => 1565273137,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerXxCcnnW');
