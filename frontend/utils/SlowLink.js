import { useRouter } from 'next/router'

export default function ({ children, href }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    setTimeout(() => {
      router.push(href).then(() => window.scrollTo(0, 0))
    }, 200);
  }

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  )
}
