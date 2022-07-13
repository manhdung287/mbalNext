import { SiteName } from 'config/const';
import { NextSeo } from 'next-seo';
import { webHost } from 'src/services/apiAddress';

interface ImageSeo {
    url: string,
    width: number,
    height: number,
    alt: string,
    type: string,
}

interface IProps {
    title: string,
    description?: string
    images: Array<ImageSeo>
    titleopenGraph?: string
    descriptionGraph?: string
}

function SEOWrapper({ title, images, description, titleopenGraph, descriptionGraph }: IProps) {
    return (
        <NextSeo
            title={title || "Using More of Config"}
            description={description || "This example uses more of the available config options."}
            openGraph={{
                url: webHost,
                title: titleopenGraph || 'Open Graph Title',
                description: descriptionGraph || 'Open Graph Description',
                images: images,
                site_name: SiteName,
            }}
        />
    )
}

export default SEOWrapper;