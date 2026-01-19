import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Watch, FlaskConical, TrendingUp } from 'lucide-react'
import { ReactNode } from 'react'

export function Features() {
    return (
        <section id="how-it-works" className="bg-[#EBE8E1] py-8 md:py-14 scroll-mt-24">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl text-[#111111]" style={{ fontFamily: '"New York", Georgia, serif' }}>Results in 14 days. Guaranteed.</h2>
                    <p className="mt-2 text-[#6B6B6B]">Connect. Test one habit. See the proof. Three steps to finally knowing what works.</p>
                </div>
                <div className="mx-auto mt-6 grid max-w-sm md:max-w-full grid-cols-1 md:grid-cols-3 gap-6 *:text-center md:mt-8">
                    <Card className="group shadow-black-950/5 bg-white border-[#E5E2DB]">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Watch className="size-6 text-[#1F4D3A]" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-[#111111]">1. Connect</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-[#6B6B6B]">Sync your phone, watch, or just log how you feel. We capture your baseline automatically.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-black-950/5 bg-white border-[#E5E2DB]">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <FlaskConical className="size-6 text-[#1F4D3A]" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-[#111111]">2. Test</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-[#6B6B6B]">Pick a habit you&apos;ve been curious about. No caffeine. More sleep. Cold showers. Anything.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-black-950/5 bg-white border-[#E5E2DB]">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <TrendingUp className="size-6 text-[#1F4D3A]" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium text-[#111111]">3. Know</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm text-[#6B6B6B]">See exactly what changed. Sleep. Energy. Focus. Now you know what works for you.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div aria-hidden className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"/>
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-t border-l">{children}</div>
    </div>
)