import { Injectable } from '@angular/core';
import { Blog } from './app.model';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  blogs: Blog[] = [
    {
      title: 'Blog Post 1',
      description: 'A blog is a website or page that is a part of a larger website.Typically, it features articles written in a conversational style with accompanying pictures or videos.',
      img: 'https://image-processor-storage.s3.us-west-2.amazonaws.com/images/281c2d4581ed27c8a258b0e79bc504ad/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg'
    },
    {
      title: 'Blog Post 2',
      description: 'In this article, we will explore 11 types of blogs in different niche industries, including tech, lifestyle, beauty and fashion, health and fitness, education.',
      img: 'https://image-processor-storage.s3.us-west-2.amazonaws.com/images/8636a5655f682b91695c76226ed05b61/skyscrapers-and-infrastructure-in-a-modern-city.jpg'
    },
    {
      title: 'Blog Post 3',
      description: 'We will include five of the best blog examples for each type, discuss each blog example briefly, and highlight what we can learn from the blog.',
      img: 'https://image-processor-storage.s3.us-west-2.amazonaws.com/images/5e062c385f0b9112b87811b7523e20af/evolution-of-shape.jpg'
    }
  ]

  foodBlogs: Blog[] = [
    {
      title: 'Blog Post 1',
      description: 'Blogs in different niche industries, including tech, lifestyle, beauty and fashion, health and fitness, education.',
      img: 'https://image-processor-storage.s3.us-west-2.amazonaws.com/images/8636a5655f682b91695c76226ed05b61/skyscrapers-and-infrastructure-in-a-modern-city.jpg'
    },
    {
      title: 'Blog Post 2',
      description: 'A larger website.Typically, it features articles written in a conversational style with accompanying pictures or videos.',
      img: 'https://image-processor-storage.s3.us-west-2.amazonaws.com/images/281c2d4581ed27c8a258b0e79bc504ad/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg'
    },
    {
      title: 'Blog Post 3',
      description: 'Discuss each blog example briefly, and highlight what we can learn from the blog.',
      img: 'https://image-processor-storage.s3.us-west-2.amazonaws.com/images/5e062c385f0b9112b87811b7523e20af/evolution-of-shape.jpg'
    }
  ]
}
