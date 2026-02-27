import React from 'react'
import Content from './Content'
import Reviews from './Reviews'

export default function Hero() {
    return (
        <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: "url('/wallpaper.png')" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 h-screen" />

            {/* Content wrapper */}
            <div className="relative z-10 flex flex-col lg:flex-row min-h-screen container mx-auto px-4 md:px-6">
                <Content />
                <Reviews />
            </div>
        </div>
    )
}
