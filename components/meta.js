import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '@/lib/constants'

export default function Meta () {
  return (
    <Head>
      <link rel='shortcut icon' href='/favicon.svg' />
      <meta name='theme-color' content='#000' />
      <meta
        name='description'
        content={`A statically generated blog using Next.js and ${CMS_NAME}.`}
      />
      <meta property='og:image' content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
