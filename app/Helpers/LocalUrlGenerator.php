<?php
namespace App\Helpers;

use DateTimeInterface;
use Illuminate\Filesystem\FilesystemManager;
use Illuminate\Contracts\Config\Repository as Config;
use Illuminate\Support\Facades\Crypt;
use Spatie\MediaLibrary\UrlGenerator\BaseUrlGenerator;
use Spatie\MediaLibrary\UrlGenerator\LocalUrlGenerator as ParentLocalUrlGenerator;
use Spatie\MediaLibrary\UrlGenerator\UrlGenerator;

class LocalUrlGenerator extends ParentLocalUrlGenerator implements UrlGenerator{
    public $filesystemManager;
    public $config;
    public function __construct(Config $config, FilesystemManager $filesystemManager)
    {
        // parent::boot();
        // parent::__construct($config);
        $this->filesystemManager = $filesystemManager;
        $this->config = $config;
    }

    public function getUrl(): string
    {
        // dd($this->media);
        $url = $this->getBaseMediaDirectoryUrl().'/'.$this->getPathRelativeToRoot();
        $url = $this->makeCompatibleForNonUnixHosts($url);
        $url = $this->rawUrlEncodeFilename($url);
        $url = $this->versionUrl($url);

        return $url;
        // $url = $this->getBaseMediaDirectoryUrl().'/'.$this->getPathRelativeToRoot();
        // // dd($this->getBaseMediaDirectoryUrl());
        // $url = $this->makeCompatibleForNonUnixHosts($url);

        // $url = $this->rawUrlEncodeFilename($url);

        // $url = $this->versionUrl($url);

        // return $url;
    }

    public function getTemporaryUrl(DateTimeInterface $expiration, array $options = []): string
    {
        // dd($this->media);
        // return $this
        //     ->filesystemManager
        //     ->disk($this->media->disk)
        //     ->temporaryUrl($this->getPath(), $expiration, $options);
    }

    public function getResponsiveImagesDirectoryUrl(): string
    {
        // $this
    }

    public function getPathRelativeToRoot():string{
        // dd($this->conversion);
        // dd($this->pathGenerator->getPath($this->media));
        if (is_null($this->conversion)) {
            return Crypt::encrypt($this->pathGenerator->getPath($this->media).($this->media->file_name));
        }

        return $this->pathGenerator->getPathForConversions($this->media)
                .$this->conversion->getConversionFile($this->media->file_name);
    }

    // public function getPath(): string
    // {
    //     return $this->getStoragePath().'/'.$this->getPathRelativeToRoot();
    // }
}
