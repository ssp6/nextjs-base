import { Nav } from '@/components/Nav'
import { TourCard } from '@/components/TourCard'
import { CarouselSpacing } from '../components/TestCarousel'
import { container } from '../styles'
import { cn } from '../lib/utils'
import Image from 'next/image'
import Footer from '../components/Footer'
import { HandHeart } from '../components/icons/hand-heart'
import { Map } from '../components/icons/map'

const Home = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/hero-image.webp"
        alt="Hero Image"
        fill
        quality={100}
        className="absolute inset-0 z-0 hero-clip-path object-cover"
      />
      {/* Image overlay for color change */}
      <div className="absolute inset-0 bg-[rgb(5_6_21)] bg-opacity-70 hero-clip-path z-[1] pointer-events-none"></div>
      <Nav />
      <main className="z-10 relative">
        {/* Hero Section */}
        <section
          className={cn(
            'relative md:pt-32 pt-10 text-white min-h-screen',
            container,
          )}
        >
          <div className={'relative'}>
            <h1 className="text-xl md:text-3xl font-bold text-left text-white">
              EXPLORE THE WORLD <br />
              <span className="text-3xl md:text-8xl text-[#DAFAFD]">
                SUSTAINABLY
              </span>
            </h1>
            <span className="font-bold text-left text-3xl md:text-8xl text-[#DAFAFD] opacity-10 transform -scale-y-100 absolute sr-hidden">
              <span className={'relative top-3'}>SUSTAINABLY</span>
            </span>
          </div>
          <p className="mt-4 max-w-2xl text-lg">
            Embark on unforgettable journeys that respect the planet and support
            local communities. Whether you seek thrilling adventures or serene
            escapes, join us in making travel a force for good.
          </p>
          <div className="mt-8">
            <button className="px-5 py-3 border border-gray-400 text-white text-xl rounded hover:bg-gray-600 hover:text-white transition">
              DISCOVER ADVENTURES
            </button>
          </div>
        </section>
        {/* Tour Package */}
        <section
          className={cn(
            'flex flex-col items-center justify-center pt-10 pb-32',
            container,
          )}
        >
          <h2 className="text-3xl font-bold text-black text-center font-header">
            Tour Packages
          </h2>
          <p className="text-center text-gray-400 mt-5 max-w-xl">
            Discover our diverse range of eco-friendly adventures across the
            world crafted for the environmentally conscious traveller
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            <TourCard
              imageUrl="/images/indonesia.png"
              location="INDONESIA"
              price="$3,500"
              duration="6 Weeks"
            />
            <TourCard
              imageUrl="/images/australia.png"
              location="AUSTRALIA"
              price="$2,200"
              duration="2 Weeks"
            />
            <TourCard
              imageUrl="/images/scotland.png"
              location="SCOTLAND"
              price="$2,200"
              duration="2 Weeks"
            />
            <TourCard
              imageUrl="/images/croatia.png"
              location="CROATIA"
              price="$2,800"
              duration="3 Weeks"
            />
          </div>
        </section>
        {/* Why Chose Us */}
        <section className={'bg-[#F3FAFC] py-36'}>
          <div className={container}>
            <h2 className="text-3xl font-bold text-black text-center font-header">
              Why Chose Us
            </h2>
            <div className="flex flex-col md:flex-row justify-around items-center mt-14">
              <div className="flex flex-col items-center text-center p-4">
                <div
                  className={
                    'rounded-full flex items-center justify-center w-20 h-20 bg-[#DFF5EA] mb-6'
                  }
                >
                  <Map className={'fill-[#5FBA57] w-12 h-12'} />
                </div>
                <h3 className="text-2xl font-semibold">
                  Sustainable Practices
                </h3>
                <p className="text-gray-600 mt-2 max-w-[270px]">
                  Every trip is designed to minimize environmental impact
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div
                  className={
                    'rounded-full flex items-center justify-center w-20 h-20 bg-[#DEF5F4] mb-6'
                  }
                >
                  <HandHeart className={'fill-[#5BC4D4] w-12 h-12'} />
                </div>
                <h3 className="text-2xl font-semibold">Local Support</h3>
                <p className="text-gray-600 mt-2 max-w-[270px]">
                  We promise local communities and business
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div
                  className={
                    'rounded-full flex items-center justify-center w-20 h-20 bg-[#F4F6E4] mb-6'
                  }
                >
                  <Map className={'fill-[#F4D74C] w-12 h-12'} />
                </div>
                <h3 className="text-2xl font-semibold">Expert Guides</h3>
                <p className="text-gray-600 mt-2 max-w-[270px]">
                  Experienced guides passionate about eco-friendly travel
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={'bg-[#FAFFFF] w-full py-36'}>
          <div
            className={cn(
              'flex flex-col items-center justify-center',
              container,
            )}
          >
            <h2 className="text-3xl font-bold text-black text-center font-header">
              What Our Travellers Say
            </h2>
            <p className="text-center text-gray-400 mt-5 max-w-xl mb-14">
              Read testimonials from our travellers who have experienced the
              magic and impact of our eco-tours
            </p>
            <CarouselSpacing />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
