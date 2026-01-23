import { Card, CardContent } from '@/components/ui/card'

export function Features() {
    return (
        <section id="how-it-works" className="bg-[#EBE8E1] py-16 md:py-24 lg:py-28 scroll-mt-24" aria-labelledby="how-it-works-heading">
            <div className="container mx-auto max-w-5xl px-4 sm:px-6">
                <div className="text-center mb-10 md:mb-14">
                    <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>Finally answer the questions you've been asking</h2>
                    <p className="mt-4 text-[#6B6B6B] max-w-2xl mx-auto text-base sm:text-lg">Run simple 14-day experiments on the habits that matter to you. Get real answers, not more data.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    <Card className="bg-white border-[#E5E2DB] p-5 sm:p-6">
                        <CardContent className="p-0">
                            <p className="text-[#111111] font-medium mb-2 text-base sm:text-lg">"Does my morning routine actually help?"</p>
                            <p className="text-sm sm:text-base text-[#6B6B6B]">Test whether that 5am wake-up, cold shower, or meditation is improving your focus or just making you tired.</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-[#E5E2DB] p-5 sm:p-6">
                        <CardContent className="p-0">
                            <p className="text-[#111111] font-medium mb-2 text-base sm:text-lg">"Should I cut caffeine after noon?"</p>
                            <p className="text-sm sm:text-base text-[#6B6B6B]">Find out if your afternoon coffee is really hurting your sleep, or if that's just something people say.</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-[#E5E2DB] p-5 sm:p-6">
                        <CardContent className="p-0">
                            <p className="text-[#111111] font-medium mb-2 text-base sm:text-lg">"Why do I crash at 2pm every day?"</p>
                            <p className="text-sm sm:text-base text-[#6B6B6B]">Experiment with lunch timing, meal size, or a midday walk to see what actually fixes your afternoon slump.</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-[#E5E2DB] p-5 sm:p-6">
                        <CardContent className="p-0">
                            <p className="text-[#111111] font-medium mb-2 text-base sm:text-lg">"Is this supplement doing anything?"</p>
                            <p className="text-sm sm:text-base text-[#6B6B6B]">Stop guessing if magnesium or ashwagandha is worth it. Run a controlled test and see real changes (or not).</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-[#E5E2DB] p-5 sm:p-6">
                        <CardContent className="p-0">
                            <p className="text-[#111111] font-medium mb-2 text-base sm:text-lg">"What's my ideal sleep schedule?"</p>
                            <p className="text-sm sm:text-base text-[#6B6B6B]">Test different bedtimes and wake times to find when you actually feel most rested and alert.</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white border-[#E5E2DB] p-5 sm:p-6">
                        <CardContent className="p-0">
                            <p className="text-[#111111] font-medium mb-2 text-base sm:text-lg">"Does alcohol really affect my sleep?"</p>
                            <p className="text-sm sm:text-base text-[#6B6B6B]">Compare two weeks with and without that evening glass of wine. See the difference in your own data.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
