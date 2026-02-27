import ReviewCard from "@/components/ReviewCard/ReviewCard";
import React from "react";

export default function Reviews() {
    return (
        <section className="py-20 px-6 flex-1 h-full hidden md:block">
            <div className="max-w-6xl mx-auto">


                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8 justify-items-center">
                    <div className="absolute top-35 lg:top-30 left-[60%] lg:left-[58%]">
                        <ReviewCard
                            name="Sarah Mitchell"
                            rate={5}
                            review="This service completely transformed our workflow. The team was professional and exceeded our expectations."
                            image="/girl.jpg"
                        />
                    </div>
                    <div className="absolute top-100 lg:top-85 xl:top-92 left-[50%] lg:left-[33%] xl:left-[40%]">
                        <ReviewCard
                            name="Sarah Mitchell"
                            rate={5}
                            review="This service completely transformed our workflow. The team was professional and exceeded our expectations."
                            image="/girl.jpg"
                        />
                    </div>
                    <div className="absolute top-107 -right-0 xl:-right-5 hidden lg:block">
                        <ReviewCard
                            name="Sarah Mitchell"
                            rate={5}
                            review="This service completely transformed our workflow. The team was professional and exceeded our expectations."
                            image="/girl.jpg"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}