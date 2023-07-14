'use client'

import dynamic from 'next/dynamic'

const NoSSR = dynamic(() => import('./no-ssr'), { ssr: false })

export default function Client() {
	return (
		<NoSSR />
	)
}
