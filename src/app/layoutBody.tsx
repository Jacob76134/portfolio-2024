"use client"

import LenisSmoothScroll from '@/utils/LenisSmoothScroll'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import * as React from "react"
import {NextUIProvider} from "@nextui-org/react"
import MouseTracker from '@/utils/Mouse/MouseTracker'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import { useEnableSanityOverlays } from '@/utils/enableSanityOverlays'

export const theme = atomWithStorage('theme', 'light');

export default function LayoutBody({ children}: {children: React.ReactNode}) {
    const [appTheme] = useAtom(theme);
    useEnableSanityOverlays();

    return (
        <html className={`${appTheme}`} lang="en">
            <body>

                    <NextUIProvider>
                        <Nav />
                        <main>
                            {children}
                        </main>
                        <Footer />
                        <LenisSmoothScroll />
                        <MouseTracker />
                    </NextUIProvider>

            </body>
        </html>
    )
  }