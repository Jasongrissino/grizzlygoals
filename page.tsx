'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Sparkles, ArrowRight, LogIn, ClipboardList, Target, UserCircle2, FileText, BarChart3, MessageCircle } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

function HowItWorksHero() {
  return (
    <section className="w-full py-8 md:py-10
     bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              How Goalster Works
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-200 md:text-lg">
              Discover how our AI-powered virtual coaching helps you achieve your goals.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StepByStepGuide() {
  const steps = [
    { icon: LogIn, title: "Sign Up", description: "Create your Goalster account in seconds.", color: "text-blue-500" },
    { icon: ClipboardList, title: "Take the Quiz", description: "Complete our motivation assessment to personalize your experience.", color: "text-green-500" },
    { icon: Target, title: "Set Your Goals", description: "Define your objectives and aspirations.", color: "text-red-500" },
    { icon: UserCircle2, title: "Meet Your Personalized Virtual Coach", description: "Get introduced to your unique AI coach, tailored specifically to your needs, goals, and communication style.", color: "text-purple-500" },
    { icon: FileText, title: "Receive Your Plan", description: "Get a customized action plan to achieve your goals.", color: "text-yellow-500" },
    { 
      icon: MessageCircle, 
      title: "Get Feedback and Track Progress", 
      description: "Chat with your virtual coach, receive ongoing support, and monitor your achievements as you work towards your goals.", 
      color: "text-indigo-500" 
    },
  ]

  return (
    <section className="w-full py-8 md:py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-6 mt-0 pt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Your Journey to Success</h2>
        <div className="relative max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-start mb-4 last:mb-0 ${index === 3 ? 'relative z-10' : ''}`}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-4 mt-1 ${index === 3 ? 'highlight-step relative' : ''}`}>
                <span className={`text-lg font-bold ${step.color}`}>{index + 1}</span>
              </div>
              <div className="flex-grow p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-purple-50 dark:hover:bg-purple-900/10 hover:shadow-lg">
                <h3 className={`text-lg font-semibold mb-1 flex items-center ${index === 3 ? 'text-purple-600 dark:text-purple-400' : ''}`}>
                  <step.icon className={`w-5 h-5 mr-2 ${step.color}`} />
                  {step.title}
                </h3>
                <p className={`text-sm ${index === 3 ? 'text-purple-600 dark:text-purple-400 font-medium' : 'text-gray-600 dark:text-gray-300'}`}>{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-14 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-700" style={{ height: 'calc(100% - 3.5rem)' }}></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CoachProfiles() {
  const coaches = [
    {
      name: "Alex Johnson",
      specialty: "Fitness & Nutrition",
      bio: "Alex is passionate about helping clients achieve their fitness goals through personalized workout plans and nutrition advice. With over a decade of experience in personal training and nutritional counseling, Alex has developed a holistic approach to health that considers each individual's unique needs and lifestyle.",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Sarah Lee",
      specialty: "Career Development",
      bio: "With years of experience in HR and career coaching, Sarah helps professionals navigate their career paths and achieve their professional aspirations. She specializes in resume building, interview preparation, and long-term career strategizing, empowering clients to take control of their professional lives.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    },
    {
      name: "Michael Chen",
      specialty: "Personal Finance",
      bio: "Michael is dedicated to helping individuals and families achieve financial freedom through smart budgeting and investment strategies. With a background in financial planning and economics, Michael provides practical advice on debt management, savings, and building long-term wealth.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Emily Rodriguez",
      specialty: "Mental Wellness",
      bio: "As a certified mindfulness coach, Emily guides clients towards better mental health and work-life balance. She combines traditional therapeutic techniques with modern mindfulness practices to help individuals manage stress, anxiety, and improve overall emotional well-being.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
    },
    {
      name: "David Kim",
      specialty: "Productivity & Time Management",
      bio: "David specializes in helping busy professionals optimize their time and boost productivity in both their personal and professional lives. Through a combination of cutting-edge tools and time-tested techniques, David empowers his clients to accomplish more while maintaining a healthy work-life balance.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
  ]

  return (
    <section className="w-full py-8 md:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Meet Some Of Your Virtual Coaches</h2>
        <div className="space-y-6">
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col md:flex-row overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:bg-purple-50 dark:hover:bg-purple-900/10">
                <div className="w-full md:w-1/4 h-64 md:h-auto overflow-hidden group">
                  <Image
                    src={coach.image}
                    alt={coach.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <CardContent className="flex-1 p-6">
                  <CardTitle className="text-2xl mb-2">{coach.name}</CardTitle>
                  <CardDescription className="text-lg mb-4 text-purple-600 dark:text-purple-400 font-semibold">
                    {coach.specialty}
                  </CardDescription>
                  <p className="text-gray-600 dark:text-gray-300">{coach.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
            <Sparkles className="h-6 w-6 mr-2 text-purple-600 dark:text-purple-400" />
            <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">Goalster</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="/#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="/how-it-works">
              How It Works
            </Link>
            <Link className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="/resources">
              Resources
            </Link>
            <Link className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="/pricing">
              Pricing
            </Link>
          </nav>
          <Button className="hidden md:inline-flex">Start Free Trial</Button>
          <button className="md:hidden p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>
      <main className="flex-1">
        <HowItWorksHero />
        <StepByStepGuide />
        <CoachProfiles />
      </main>
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Product</h3>
              <ul className="space-y-2">
                <li><Link href="/#features" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Pricing</Link></li>
                <li><Link href="/#faq" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/#about" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">About</Link></li>
                <li><Link href="/#blog" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Blog</Link></li>
                <li><Link href="/#careers" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/#community" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Community</Link></li>
                <li><Link href="/#help-center" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Help Center</Link></li>
                <li><Link href="/#partners" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/#privacy" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Privacy</Link></li>
                <li><Link href="/#terms" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Terms</Link></li>
                <li><Link href="/#cookie-policy" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 Goalster. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
