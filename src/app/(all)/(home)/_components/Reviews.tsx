import ReviewCard from "@/components/ReviewCard/ReviewCard";
import React from "react";

export default function Reviews() {
    return (
        <section className="py-20 px-6 flex-1 h-full hidden md:block">
            <div className="max-w-6xl mx-auto">


                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8 justify-items-center">
                    <div className="absolute top-30 left-[58%]">
                        <ReviewCard
                            name="Sarah Mitchell"
                            rate={5}
                            review="This service completely transformed our workflow. The team was professional and exceeded our expectations."
                            image="/girl.jpg"
                        />
                    </div>
                    <div className="absolute top-92 lg:left-[40%]">
                        <ReviewCard
                            name="Sarah Mitchell"
                            rate={5}
                            review="This service completely transformed our workflow. The team was professional and exceeded our expectations."
                            image="/girl.jpg"
                        />
                    </div>
                    <div className="absolute top-107 -right-5">
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