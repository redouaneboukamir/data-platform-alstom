<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\Container5g9JeK8\srcApp_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/Container5g9JeK8/srcApp_KernelDevDebugContainer.php') {
    touch(__DIR__.'/Container5g9JeK8.legacy');

    return;
}

if (!\class_exists(srcApp_KernelDevDebugContainer::class, false)) {
    \class_alias(\Container5g9JeK8\srcApp_KernelDevDebugContainer::class, srcApp_KernelDevDebugContainer::class, false);
}

return new \Container5g9JeK8\srcApp_KernelDevDebugContainer([
    'container.build_hash' => '5g9JeK8',
    'container.build_id' => '21fdcbe4',
    'container.build_time' => 1561990986,
], __DIR__.\DIRECTORY_SEPARATOR.'Container5g9JeK8');
