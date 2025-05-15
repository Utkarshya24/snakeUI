'use client';

import {
  SnakeCard,
  SnakeCardHeader,
  SnakeCardContent,
  SnakeCardFooter,
  SnakeCardCarousel,
} from '@/src/components/card/SnakeCard';

const slides = [
  {
    title: 'Welcome to your dashboard',
    subtitle: 'We are glad to have you onboard. Let explore the features together.',
    src: 'https://images.unsplash.com/photo-1587614203976-365c74645e83',
  },
  {
    title: 'Track your performance',
    subtitle: 'Get real-time analytics and insights to boost productivity.',
    src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
  },
  {
    title: 'Customize your experience',
    subtitle: 'Tweak settings and personalize everything as per your style.',
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  },
  {
    title: 'Let’s get started!',
    subtitle: 'You’re all set. Begin exploring your new dashboard now.',
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  },
];

export default function OnboardingCard() {

  return (
    <div className='flex flex-wrap mt-10 gap-10 justify-center items-center h-screen'>
    <SnakeCardCarousel variant='modern' slides={slides} showPagination={true} />
    modern<SnakeCard variant="modern">
      <SnakeCardHeader
        src="https://images.unsplash.com/photo-1587614203976-365c74645e83"
        alt="Welcome"
      />
      <SnakeCardContent
        title="Welcome to your dashboard"
        subtitle="We're glad to have you onboard. Here are some quick tips to get you up and running."
      />
      
      <SnakeCardFooter
        onConfirm={() => alert('Confirmed')}
        onCancel={() => alert('Cancelled')}
      />
    </SnakeCard>
    <SnakeCardCarousel variant='default' slides={slides} showPagination={true} />
    default<SnakeCard variant="default">
      <SnakeCardHeader
        src="https://images.unsplash.com/photo-1587614203976-365c74645e83"
        alt="Welcome"
      />
      <SnakeCardContent
        title="Welcome to your dashboard"
        subtitle="We're glad to have you onboard. Here are some quick tips to get you up and running."
      />
      
      <SnakeCardFooter
        onConfirm={() => alert('Confirmed')}
        onCancel={() => alert('Cancelled')}
      />
    </SnakeCard>
    <SnakeCardCarousel variant='bordered' slides={slides} showPagination={true} />
    bordered<SnakeCard variant="bordered">
      <SnakeCardHeader
        src="https://images.unsplash.com/photo-1587614203976-365c74645e83"
        alt="Welcome"
      />
      <SnakeCardContent
        title="Welcome to your dashboard"
        subtitle="We're glad to have you onboard. Here are some quick tips to get you up and running."
      />
      
      <SnakeCardFooter
        onConfirm={() => alert('Confirmed')}
        onCancel={() => alert('Cancelled')}
      />
    </SnakeCard>
    <SnakeCardCarousel variant='glass' slides={slides} showPagination={true} />
    glass<SnakeCard variant="glass">
      <SnakeCardHeader
        src="https://images.unsplash.com/photo-1587614203976-365c74645e83"
        alt="Welcome"
      />
      <SnakeCardContent
        title="Welcome to your dashboard"
        subtitle="We're glad to have you onboard. Here are some quick tips to get you up and running."
      />
      
      <SnakeCardFooter
        onConfirm={() => alert('Confirmed')}
        onCancel={() => alert('Cancelled')}
      />
    </SnakeCard>
    <SnakeCardCarousel variant='shadowed' slides={slides} showPagination={true} />
    shadowed<SnakeCard variant="shadowed">
      <SnakeCardHeader
        src="https://images.unsplash.com/photo-1587614203976-365c74645e83"
        alt="Welcome"
      />
      <SnakeCardContent
        title="Welcome to your dashboard"
        subtitle="We're glad to have you onboard. Here are some quick tips to get you up and running."
      />
      
      <SnakeCardFooter
        onConfirm={() => alert('Confirmed')}
        onCancel={() => alert('Cancelled')}
      />
    </SnakeCard>
    <SnakeCardCarousel variant='soft' slides={slides} showPagination={true} />
    soft<SnakeCard variant="soft">
      <SnakeCardHeader
        src="https://images.unsplash.com/photo-1587614203976-365c74645e83"
        alt="Welcome"
      />
      <SnakeCardContent
        title="Welcome to your dashboard"
        subtitle="We're glad to have you onboard. Here are some quick tips to get you up and running."
      />
      
      <SnakeCardFooter
        onConfirm={() => alert('Confirmed')}
        onCancel={() => alert('Cancelled')}
      />
    </SnakeCard>
    <SnakeCardCarousel variant='elevated' slides={slides} showPagination={true} />
    elevated<SnakeCard variant="elevated">
      <SnakeCardHeader
        src="https://images.unsplash.com/photo-1587614203976-365c74645e83"
        alt="Welcome"
      />
      <SnakeCardContent
        title="Welcome to your dashboard"
        subtitle="We're glad to have you onboard. Here are some quick tips to get you up and running."
      />
      
      <SnakeCardFooter
        onConfirm={() => alert('Confirmed')}
        onCancel={() => alert('Cancelled')}
      />
    </SnakeCard>
    <SnakeCardCarousel variant='hoverZoom' slides={slides} showPagination={true} />
    hoverZoom<SnakeCard variant="hoverZoom">
      <SnakeCardHeader
        src="https://images.unsplash.com/photo-1587614203976-365c74645e83"
        alt="Welcome"
      />
      <SnakeCardContent
        title="Welcome to your dashboard"
        subtitle="We're glad to have you onboard. Here are some quick tips to get you up and running."
      />
      
      <SnakeCardFooter
        onConfirm={() => alert('Confirmed')}
        onCancel={() => alert('Cancelled')}
      />
    </SnakeCard>
    <SnakeCardCarousel variant='gradientBorder' slides={slides} showPagination={true} />
    gradientBorder<SnakeCard variant="gradientBorder">
      <SnakeCardHeader
        src="https://images.unsplash.com/photo-1587614203976-365c74645e83"
        alt="Welcome"
      />
      <SnakeCardContent
        title="Welcome to your dashboard"
        subtitle="We're glad to have you onboard. Here are some quick tips to get you up and running."
      />
      
      <SnakeCardFooter
        onConfirm={() => alert('Confirmed')}
        onCancel={() => alert('Cancelled')}
      />
    </SnakeCard>
    <SnakeCardCarousel variant='outline' slides={slides} showPagination={true} />
    outline<SnakeCard variant="outline">
      <SnakeCardHeader
        src="https://images.unsplash.com/photo-1587614203976-365c74645e83"
        alt="Welcome"
      />
      <SnakeCardContent
        title="Welcome to your dashboard"
        subtitle="We're glad to have you onboard. Here are some quick tips to get you up and running."
      />
      
      <SnakeCardFooter
        onConfirm={() => alert('Confirmed')}
        onCancel={() => alert('Cancelled')}
      />
    </SnakeCard>
    <SnakeCardCarousel onConfirm={() => alert('Confirm')} onCancel={() => alert('canceled')} onClick={() => alert('Card clicked')} variant='clickable' slides={slides} showPagination={true} />
    clickable<SnakeCard onClick={() => alert('Card clicked')} variant="clickable">
      <SnakeCardHeader
        src="https://images.unsplash.com/photo-1587614203976-365c74645e83"
        alt="Welcome"
      />
      <SnakeCardContent
        title="Welcome to your dashboard"
        subtitle="We're glad to have you onboard. Here are some quick tips to get you up and running."
      />
      
      <SnakeCardFooter
        onConfirm={() => alert('Confirmed')}
        onCancel={() => alert('Cancelled')}
      />
    </SnakeCard>
    <SnakeCardCarousel variant='imageOverlay' slides={slides} showPagination={true} />
    imageOverlay<SnakeCard variant="imageOverlay">
      <SnakeCardHeader
        src="https://images.unsplash.com/photo-1587614203976-365c74645e83"
        alt="Welcome"
      />
      <SnakeCardContent
        title="Welcome to your dashboard"
        subtitle="We're glad to have you onboard. Here are some quick tips to get you up and running."
      />
      
      <SnakeCardFooter
        onConfirm={() => alert('Confirmed')}
        onCancel={() => alert('Cancelled')}
      />
    </SnakeCard>
    <SnakeCardCarousel variant='neumorphic' slides={slides} showPagination={true} />
    neumorphic<SnakeCard variant="neumorphic">
      <SnakeCardHeader
        src="https://images.unsplash.com/photo-1587614203976-365c74645e83"
        alt="Welcome"
      />
      <SnakeCardContent
        title="Welcome to your dashboard"
        subtitle="We're glad to have you onboard. Here are some quick tips to get you up and running."
      />
      
      <SnakeCardFooter
        onConfirm={() => alert('Confirmed')}
        onCancel={() => alert('Cancelled')}
      />
    </SnakeCard>
    <SnakeCardCarousel variant='flip' slides={slides} showPagination={true} />
    flip<SnakeCard variant="flip">
      <SnakeCardHeader
        src="https://images.unsplash.com/photo-1587614203976-365c74645e83"
        alt="Welcome"
      />
      <SnakeCardContent
        title="Welcome to your dashboard"
        subtitle="We're glad to have you onboard. Here are some quick tips to get you up and running."
      />
      
      <SnakeCardFooter
        onConfirm={() => alert('Confirmed')}
        onCancel={() => alert('Cancelled')}
      />
    </SnakeCard>
    </div>
  );
}
