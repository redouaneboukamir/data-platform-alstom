<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerMlnBr9o\srcApp_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerMlnBr9o/srcApp_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerMlnBr9o.legacy');

    return;
}

if (!\class_exists(srcApp_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerMlnBr9o\srcApp_KernelDevDebugContainer::class, srcApp_KernelDevDebugContainer::class, false);
}

return new \ContainerMlnBr9o\srcApp_KernelDevDebugContainer([
    'container.build_hash' => 'MlnBr9o',
    'container.build_id' => 'c8ead087',
    'container.build_time' => 1566464230,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerMlnBr9o');
