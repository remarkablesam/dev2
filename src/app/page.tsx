"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { FaCheckCircle as FaCheckCircleSolid } from "react-icons/fa";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

// Course data
const courses = {
  html: {
    title: "HTML Mastery",
    description: "Learn the fundamentals of HTML and build structured web pages.",
    duration: "8 hours",
    level: "Beginner",
    icon: FaHtml5,
    videos: [
      { id: "UB1O30fR-EE", title: "HTML Crash Course For Absolute Beginners", duration: "1:02:22" },
      { id: "kUMe1FH4CHE", title: "HTML Full Course - Build a Website Tutorial", duration: "2:15:43" },
      { id: "qz0aGYrrlhU", title: "HTML Tutorial for Beginners: HTML Crash Course", duration: "1:00:25" },
      { id: "R4IiS0K1_9E", title: "HTML and CSS Tutorial for Beginners | The Ultimate Guide to HTML & CSS", duration: "3:08:13" },
      { id: "HU7cF3Lgk9I", title: "HTML5 Tutorial for Beginners | HTML5 Crash Course", duration: "1:45:30" }
    ],
    quizzes: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Home Tool Markup Language",
          "Hyperlink and Text Markup Language"
        ],
        correct: 0
      },
      {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: [
          "<link>",
          "<a>",
          "<href>",
          "<url>"
        ],
        correct: 1
      },
      {
        question: "What is the correct HTML element for the largest heading?",
        options: [
          "<h1>",
          "<h6>",
          "<head>",
          "<heading>"
        ],
        correct: 0
      }
    ]
  },
  css: {
    title: "CSS Essentials",
    description: "Style your websites with CSS and create beautiful layouts.",
    duration: "10 hours",
    level: "Intermediate",
    icon: FaCss3Alt,
    videos: [
      { id: "yfoY53QXEnI", title: "CSS Crash Course For Absolute Beginners", duration: "1:01:12" },
      { id: "1Rs2ND1ryYc", title: "CSS Full Course - Build a Website Tutorial", duration: "2:28:48" },
      { id: "yfoY53QXEnI", title: "CSS Tutorial for Beginners - Complete CSS Crash Course", duration: "1:01:12" },
      { id: "R4IiS0K1_9E", title: "HTML and CSS Tutorial for Beginners | The Ultimate Guide to HTML & CSS", duration: "3:08:13" },
      { id: "x9U8SiFm47I", title: "CSS Grid Tutorial for Beginners", duration: "1:02:15" }
    ],
    quizzes: [
      {
        question: "What does CSS stand for?",
        options: [
          "Creative Style Sheets",
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Colorful Style Sheets"
        ],
        correct: 2
      },
      {
        question: "Which property is used to change the text color in CSS?",
        options: [
          "text-color",
          "font-color",
          "color",
          "text-style"
        ],
        correct: 2
      },
      {
        question: "How do you select an element with id 'demo' in CSS?",
        options: [
          ".demo",
          "#demo",
          "*demo",
          "demo"
        ],
        correct: 1
      }
    ]
  },
  js: {
    title: "JavaScript Fundamentals",
    description: "Add interactivity to your websites with JavaScript.",
    duration: "15 hours",
    level: "Intermediate",
    icon: FaJsSquare,
    videos: [
      { id: "hdI2bqOjy3c", title: "JavaScript Crash Course For Beginners", duration: "1:28:15" },
      { id: "PkZNo7MFNFg", title: "Learn JavaScript - Full Course for Beginners", duration: "3:26:43" },
      { id: "W6NZfCO5SIk", title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour", duration: "1:00:14" },
      { id: "jS4aFq5-91M", title: "JavaScript DOM Tutorial", duration: "1:25:45" },
      { id: "cT4jJ4c8p4A", title: "JavaScript Async/Await Tutorial", duration: "1:15:30" }
    ],
    quizzes: [
      {
        question: "Which company developed JavaScript?",
        options: [
          "Microsoft",
          "Netscape",
          "Google",
          "Sun Microsystems"
        ],
        correct: 1
      },
      {
        question: "Which symbol is used for comments in JavaScript?",
        options: [
          "//",
          "<!-- -->",
          "/* */",
          "Both // and /* */"
        ],
        correct: 3
      },
      {
        question: "How do you declare a JavaScript variable?",
        options: [
          "variable carName;",
          "v carName;",
          "var carName;",
          "declare carName;"
        ],
        correct: 2
      }
    ]
  }
};

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentSection, setCurrentSection] = useState("home");
  const [currentCourse, setCurrentCourse] = useState<string | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [completedVideos, setCompletedVideos] = useState<Record<string, number[]>>({
    html: [],
    css: [],
    js: []
  });
  const [discussionThreads, setDiscussionThreads] = useState<any[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [users, setUsers] = useState<any[]>([
    { id: 1, name: "John Doe", email: "john@example.com", role: "student", status: "active", joinDate: "2023-01-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "instructor", status: "active", joinDate: "2023-02-20" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "student", status: "inactive", joinDate: "2023-03-10" },
    { id: 4, name: "Alice Brown", email: "alice@example.com", role: "admin", status: "active", joinDate: "2023-01-05" }
  ]);
  const [certificates, setCertificates] = useState<any[]>([
    { id: "CERT-001", userId: 1, userName: "John Doe", course: "HTML Mastery", courseKey: "html", issueDate: "2023-06-15", verificationCode: "DL-HTML-12345", status: "active" },
    { id: "CERT-002", userId: 2, userName: "Jane Smith", course: "CSS Essentials", courseKey: "css", issueDate: "2023-07-20", verificationCode: "DL-CSS-67890", status: "active" },
    { id: "CERT-003", userId: 3, userName: "Bob Johnson", course: "JavaScript Fundamentals", courseKey: "js", issueDate: "2023-08-10", verificationCode: "DL-JS-54321", status: "revoked" }
  ]);
  const [newThread, setNewThread] = useState({ title: "", content: "" });
  const [verifyCode, setVerifyCode] = useState("");
  const [verificationResult, setVerificationResult] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "student", status: "active" });
  const [newCertificate, setNewCertificate] = useState({ userId: "", courseKey: "" });

  // Load data from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem("courseProgress");
    if (savedProgress) {
      setCompletedVideos(JSON.parse(savedProgress));
    }

    const savedThreads = localStorage.getItem("discussionThreads");
    if (savedThreads) {
      setDiscussionThreads(JSON.parse(savedThreads));
    }

    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }

    const savedCertificates = localStorage.getItem("certificates");
    if (savedCertificates) {
      setCertificates(JSON.parse(savedCertificates));
    }

    // Auto-enter site after 3 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("courseProgress", JSON.stringify(completedVideos));
    localStorage.setItem("discussionThreads", JSON.stringify(discussionThreads));
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("certificates", JSON.stringify(certificates));
  }, [completedVideos, discussionThreads, users, certificates]);

  const enterSite = () => {
    setShowWelcome(false);
  };

  const showSection = (section: string) => {
    if (section === "admin") {
      const password = prompt("Enter admin password:");
      if (password === "admin123") {
        setIsAdmin(true);
        setCurrentSection("admin");
      }
      return;
    }
    setCurrentSection(section);
  };

  const startCourse = (courseId: string) => {
    setCurrentCourse(courseId);
    setCurrentVideoIndex(0);
    setCurrentSection("video");
  };

  const getProgress = (courseId: string) => {
    const completed = completedVideos[courseId]?.length || 0;
    const total = courses[courseId as keyof typeof courses].videos.length;
    return Math.round((completed / total) * 100);
  };

  const markVideoComplete = () => {
    if (!currentCourse) return;

    const updatedCompleted = { ...completedVideos };
    if (!updatedCompleted[currentCourse].includes(currentVideoIndex)) {
      updatedCompleted[currentCourse] = [...updatedCompleted[currentCourse], currentVideoIndex];
      setCompletedVideos(updatedCompleted);

      // Move to next video if available
      if (currentVideoIndex < courses[currentCourse as keyof typeof courses].videos.length - 1) {
        setCurrentVideoIndex(currentVideoIndex + 1);
      } else {
        // Course completed
        if (currentCourse === "html") {
          alert("Congratulations! You have completed the HTML course. You can now download your certificate!");
          setCurrentSection("certificate");
        } else {
          alert("Congratulations! You have completed this course.");
          setCurrentSection("courses");
        }
      }
    }
  };

  const postThread = () => {
    if (!newThread.title || !newThread.content || !currentCourse) return;

    const thread = {
      id: Date.now(),
      course: currentCourse,
      title: newThread.title,
      content: newThread.content,
      author: "Current User",
      date: new Date().toISOString()
    };

    setDiscussionThreads([...discussionThreads, thread]);
    setNewThread({ title: "", content: "" });
  };

  const handleQuizAnswer = (questionIndex: number, optionIndex: number) => {
    setQuizAnswers({ ...quizAnswers, [questionIndex]: optionIndex });
  };

  const submitQuiz = () => {
    if (!currentCourse) return;

    const courseQuizzes = courses[currentCourse as keyof typeof courses].quizzes;
    let correct = 0;

    Object.entries(quizAnswers).forEach(([questionIndex, answerIndex]) => {
      const question = courseQuizzes[parseInt(questionIndex)];
      if (question.correct === answerIndex) {
        correct++;
      }
    });

    const total = courseQuizzes.length;
    const percentage = Math.round((correct / total) * 100);

    if (percentage >= 70) {
      alert(`You passed! ${correct}/${total} correct (${percentage}%)`);
    } else {
      alert(`You need ${70 - percentage}% more to pass. ${correct}/${total} correct (${percentage}%)`);
    }
  };

  const verifyCertificate = () => {
    const certificate = certificates.find(cert => cert.verificationCode === verifyCode);
    
    if (certificate) {
      if (certificate.status === "active") {
        setVerificationResult({
          type: "success",
          message: `Certificate verified successfully! This certificate is authentic and issued to ${certificate.userName}.`
        });
      } else {
        setVerificationResult({
          type: "error",
          message: `This certificate has been ${certificate.status} and is no longer valid.`
        });
      }
    } else {
      setVerificationResult({
        type: "error",
        message: "Invalid verification code. Please check and try again."
      });
    }
  };

  const downloadCertificate = () => {
    // In a real app, this would generate a PDF
    alert("Certificate download functionality would be implemented here with jsPDF.");
  };

  const addNewUser = () => {
    if (!newUser.name || !newUser.email) return;

    const userExists = users.find(u => u.email === newUser.email);
    if (userExists) {
      alert("A user with this email already exists.");
      return;
    }

    const newUserObj = {
      id: Date.now(),
      ...newUser,
      joinDate: new Date().toISOString().split("T")[0]
    };

    setUsers([...users, newUserObj]);
    setNewUser({ name: "", email: "", role: "student", status: "active" });
  };

  const deleteUser = (userId: number) => {
    const user = users.find(u => u.id === userId);
    if (!user) return;

    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      setUsers(users.filter(u => u.id !== userId));
    }
  };

  const issueCertificate = () => {
    if (!newCertificate.userId || !newCertificate.courseKey) return;

    const user = users.find(u => u.id == parseInt(newCertificate.userId));
    const course = courses[newCertificate.courseKey as keyof typeof courses];

    if (!user || !course) {
      alert("Invalid user or course selected.");
      return;
    }

    const certId = `CERT-${String(certificates.length + 1).padStart(3, "0")}`;
    const verificationCode = `DL-${newCertificate.courseKey.toUpperCase()}-${Math.floor(10000 + Math.random() * 90000)}`;

    const newCertificateObj = {
      id: certId,
      userId: parseInt(newCertificate.userId),
      userName: user.name,
      course: course.title,
      courseKey: newCertificate.courseKey,
      issueDate: new Date().toISOString().split("T")[0],
      verificationCode,
      status: "active"
    };

    setCertificates([...certificates, newCertificateObj]);
    setNewCertificate({ userId: "", courseKey: "" });
    alert(`Certificate issued successfully! Verification Code: ${verificationCode}`);
  };

  const toggleCertificateStatus = (certificateId: string) => {
    const certificate = certificates.find(c => c.id === certificateId);
    if (!certificate) return;

    const newStatus = certificate.status === "active" ? "revoked" : "active";
    setCertificates(certificates.map(c => 
      c.id === certificateId ? { ...c, status: newStatus } : c
    ));
  };

  const getTotalCompletedLessons = () => {
    return Object.values(completedVideos).reduce((total, videos) => total + videos.length, 0);
  };

  const getLearningStreak = () => {
    const streak = parseInt(localStorage.getItem("learningStreak") || "0");
    return streak > 0 ? streak : 0;
  };

  if (showWelcome) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col items-center justify-center text-white z-50">
        <div className="text-6xl mb-8 animate-float">
          <FaCode />
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
          DevLearn Pro
        </h1>
        <p className="text-xl mb-8 text-center max-w-md opacity-90">
          Master Web Development with Interactive Courses and Community Support
        </p>
        <div className="flex gap-2">
          <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: "0s" }} />
          <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-40 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaCode className="text-2xl text-indigo-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                DevLearn Pro
              </span>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6">
              {["home", "courses", "dashboard", "certificate", "about"].map((section) => (
                <button
                  key={section}
                  onClick={() => showSection(section)}
                  className={`px-3 py-2 rounded-lg font-medium transition-colors ${
                    currentSection === section
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <button
                onClick={() => showSection("admin")}
                className="px-3 py-2 rounded-lg font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Admin
              </button>
            </nav>
            {/* Mobile Nav */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger className="p-2 rounded-md border bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 w-64 backdrop-blur-md bg-white/60">
                  <div className="flex flex-col h-full">
                    <div className="p-4 border-b">
                      <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">DevLearn Pro</span>
                    </div>
                    <nav className="flex-1 p-4 space-y-2">
                      {["home", "courses", "dashboard", "certificate", "about"].map((section) => (
                        <button
                          key={section}
                          onClick={() => showSection(section)}
                          className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-colors ${
                            currentSection === section
                              ? "bg-indigo-100 text-indigo-700"
                              : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
                          }`}
                        >
                          {section.charAt(0).toUpperCase() + section.slice(1)}
                        </button>
                      ))}
                      <button
                        onClick={() => showSection("admin")}
                        className="w-full text-left px-3 py-2 rounded-lg font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                      >
                        Admin
                      </button>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Home Section */}
        {currentSection === "home" && (
          <div className="space-y-12">
            {/* Hero */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-12 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent animate-pulse" />
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Master Web Development</h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                  Learn HTML, CSS, and JavaScript with our interactive courses. Practice coding, join discussions, and earn certificates!
                </p>
                <Button onClick={() => showSection("courses")} size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                  Start Learning
                </Button>
              </div>
            </div>

            {/* Welcome Developers */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-white">
              <h2 className="text-3xl font-bold mb-4 text-center">Welcome, Developers!</h2>
              <p className="text-lg mb-8 text-center max-w-3xl mx-auto opacity-90">
                Join thousands of developers who have leveled up their skills with our comprehensive web development courses. Whether you're a beginner or looking to advance your career, we have the right resources for you.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <FaLaptopCode className="text-4xl mx-auto mb-4" />
                    <CardTitle>Interactive Learning</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-white/80">
                      Practice with real-time code editor and quizzes.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <FaUsers className="text-4xl mx-auto mb-4" />
                    <CardTitle>Community Support</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-white/80">
                      Join discussions and get help from peers.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <FaCertificate className="text-4xl mx-auto mb-4" />
                    <CardTitle>Verified Certificates</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-white/80">
                      Earn certificates recognized by industry leaders.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Courses Section */}
        {currentSection === "courses" && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Our Courses</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(courses).map(([key, course]) => (
                <Card key={key} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-8 text-white text-center">
                    <course.icon className="text-5xl mx-auto" />
                  </div>
                  <CardHeader>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <FaBook /> {course.duration}
                      </span>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>
                    <Button onClick={() => startCourse(key)} className="w-full mb-4">
                      Start Course
                    </Button>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{getProgress(key)}%</span>
                      </div>
                      <Progress value={getProgress(key)} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Dashboard Section */}
        {currentSection === "dashboard" && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Learning Dashboard</h2>
            
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="text-center">
                  <FaBook className="text-3xl mx-auto mb-2 text-indigo-600" />
                  <CardTitle className="text-2xl">3</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>Courses Enrolled</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <FaCheckCircle className="text-3xl mx-auto mb-2 text-green-600" />
                  <CardTitle className="text-2xl">{getTotalCompletedLessons()}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>Lessons Completed</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <FaFire className="text-3xl mx-auto mb-2 text-orange-600" />
                  <CardTitle className="text-2xl">{getLearningStreak()}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>Day Streak</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <FaTrophy className="text-3xl mx-auto mb-2 text-blue-600" />
                  <CardTitle className="text-2xl">2</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>Achievements</CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Progress Chart */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(courses).map(([key, course]) => (
                    <div key={key}>
                      <div className="flex justify-between mb-2">
                        <span>{course.title}</span>
                        <span>{getProgress(key)}%</span>
                      </div>
                      <Progress value={getProgress(key)} className="h-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Achievements</h3>
              <div className="flex flex-wrap gap-4">
                <Card className="w-32 text-center">
                  <CardHeader>
                    <FaStar className="text-3xl mx-auto mb-2 text-yellow-500" />
                  </CardHeader>
                  <CardContent>
                    <CardDescription>First Steps</CardDescription>
                  </CardContent>
                </Card>
                <Card className="w-32 text-center">
                  <CardHeader>
                    <FaCode className="text-3xl mx-auto mb-2 text-indigo-600" />
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Code Warrior</CardDescription>
                  </CardContent>
                </Card>
                <Card className="w-32 text-center">
                  <CardHeader>
                    <FaFire className="text-3xl mx-auto mb-2 text-orange-600" />
                  </CardHeader>
                  <CardContent>
                    <CardDescription>7-Day Streak</CardDescription>
                  </CardContent>
                </Card>
                <Card className="w-32 text-center opacity-50">
                  <CardHeader>
                    <FaTrophy className="text-3xl mx-auto mb-2 text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Quiz Master</CardDescription>
                  </CardContent>
                </Card>
                <Card className="w-32 text-center opacity-50">
                  <CardHeader>
                    <FaGraduationCap className="text-3xl mx-auto mb-2 text-gray-400" />
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Course Complete</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {/* Video Learning Section */}
        {currentSection === "video" && currentCourse && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">{courses[currentCourse as keyof typeof courses].title}</h2>
            
            <Tabs defaultValue="video" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="video">Video</TabsTrigger>
                <TabsTrigger value="practice">Practice</TabsTrigger>
                <TabsTrigger value="quiz">Quiz</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
              </TabsList>
              
              <TabsContent value="video" className="space-y-6">
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${courses[currentCourse as keyof typeof courses].videos[currentVideoIndex]?.id}`}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Course Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {courses[currentCourse as keyof typeof courses].videos.map((video, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg cursor-pointer transition-colors ${
                            index === currentVideoIndex
                              ? "bg-indigo-100 border-indigo-300"
                              : "hover:bg-gray-50"
                          } ${
                            completedVideos[currentCourse]?.includes(index)
                              ? "border-l-4 border-green-500"
                              : ""
                          }`}
                          onClick={() => setCurrentVideoIndex(index)}
                        >
                          <div className="flex items-center gap-3">
                            {completedVideos[currentCourse]?.includes(index) ? (
                              <FaCheckCircle className="text-green-500" />
                            ) : (
                              <FaPlayCircle />
                            )}
                            <div className="flex-1">
                              <div className="font-medium">{video.title}</div>
                              <div className="text-sm text-gray-500">{video.duration}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="practice" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Code Practice</CardTitle>
                    <CardDescription>
                      Try out the concepts you've learned in the video. Write your code below and see the result!
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello World!</h1>
</body>
</html>"
                      className="min-h-[300px] font-mono"
                    />
                    <Button className="mt-4">Run Code</Button>
                    <Card className="mt-4">
                      <CardContent className="p-4">
                        <p className="text-gray-500">Your output will appear here...</p>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="quiz" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Knowledge Check</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {courses[currentCourse as keyof typeof courses].quizzes.map((quiz, qIndex) => (
                        <div key={qIndex} className="space-y-3">
                          <h4 className="font-semibold">Question {qIndex + 1}: {quiz.question}</h4>
                          <div className="space-y-2">
                            {quiz.options.map((option, oIndex) => (
                              <div
                                key={oIndex}
                                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                                  quizAnswers[qIndex] === oIndex
                                    ? "bg-indigo-100 border-indigo-300"
                                    : "hover:bg-gray-50"
                                }`}
                                onClick={() => handleQuizAnswer(qIndex, oIndex)}
                              >
                                {option}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button onClick={submitQuiz} className="mt-6">
                      Submit Quiz
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="discussion" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Start a New Discussion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Input
                        placeholder="Enter discussion title"
                        value={newThread.title}
                        onChange={(e) => setNewThread({ ...newThread, title: e.target.value })}
                      />
                      <Textarea
                        placeholder="Write your question or thoughts..."
                        value={newThread.content}
                        onChange={(e) => setNewThread({ ...newThread, content: e.target.value })}
                      />
                      <Button onClick={postThread}>Post Discussion</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-4">
                  {discussionThreads
                    .filter(thread => thread.course === currentCourse)
                    .map((thread) => (
                      <Card key={thread.id}>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{thread.title}</CardTitle>
                            <div className="text-sm text-gray-500">
                              {new Date(thread.date).toLocaleDateString()}
                            </div>
                          </div>
                          <CardDescription>By {thread.author}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4">{thread.content}</p>
                          <div className="flex gap-4">
                            <Button variant="ghost" size="sm">
                              <FaThumbsUp className="mr-2" /> Like
                            </Button>
                            <Button variant="ghost" size="sm">
                              <FaComment className="mr-2" /> Reply
                            </Button>
                            <Button variant="ghost" size="sm">
                              <FaShare className="mr-2" /> Share
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-center gap-4 mt-8">
              <Button onClick={markVideoComplete}>Mark as Complete</Button>
              <Button variant="outline" onClick={() => setCurrentSection("courses")}>
                Back to Courses
              </Button>
            </div>
          </div>
        )}

        {/* Certificate Section */}
        {currentSection === "certificate" && (
          <div>
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <div className="flex items-center justify-center mb-8">
                  <FaCertificate className="text-5xl text-indigo-600 mr-4" />
                  <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    DevLearn Pro
                  </span>
                </div>
                
                <h2 className="text-4xl font-bold mb-8 text-indigo-600">Certificate of Completion</h2>
                
                <p className="text-lg mb-4">This is to certify that</p>
                <div className="text-2xl font-bold mb-4 underline decoration-indigo-300">John Doe</div>
                <p className="text-lg mb-4">has successfully completed the</p>
                <div className="text-2xl font-bold text-indigo-600 mb-4">HTML Mastery Course</div>
                <p className="text-lg mb-4">with distinction on</p>
                <div className="text-lg mb-8">{new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
                
                <div className="flex justify-between mb-8">
                  <div className="text-center">
                    <div className="h-px bg-gray-400 w-48 mb-2" />
                    <p>Instructor</p>
                  </div>
                  <div className="text-center">
                    <div className="h-px bg-gray-400 w-48 mb-2" />
                    <p>Director</p>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 mb-8">
                  <p>Verification Code: <span className="font-mono bg-gray-100 px-2 py-1 rounded">DL-HTML-12345</span></p>
                  <p className="mt-2">This certificate is verifiable at devlearnpro.example.com/verify</p>
                </div>
                
                <div className="flex justify-center gap-4">
                  <Button onClick={downloadCertificate}>Download Certificate</Button>
                  <Button variant="outline" onClick={() => setCurrentSection("verification")}>
                    Verify Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Verification Section */}
        {currentSection === "verification" && (
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Certificate Verification</CardTitle>
                <CardDescription className="text-center">
                  Enter the verification code to check the authenticity of a certificate.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    placeholder="e.g., DL-HTML-12345"
                    value={verifyCode}
                    onChange={(e) => setVerifyCode(e.target.value)}
                  />
                  <Button onClick={verifyCertificate} className="w-full">
                    Verify
                  </Button>
                  
                  {verificationResult && (
                    <div className={`p-4 rounded-lg ${
                      verificationResult.type === "success" 
                        ? "bg-green-100 text-green-800 border border-green-200"
                        : "bg-red-100 text-red-800 border border-red-200"
                    }`}>
                      {verificationResult.type === "success" ? (
                        <FaCheckCircleSolid className="inline mr-2" />
                      ) : (
                        <FaTimesCircle className="inline mr-2" />
                      )}
                      {verificationResult.message}
                    </div>
                  )}
                  
                  <Button 
                    variant="outline" 
                    onClick={() => setCurrentSection("certificate")}
                    className="w-full"
                  >
                    Back to Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Admin Section */}
        {currentSection === "admin" && isAdmin && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Admin Panel</h2>
              <Button variant="destructive" onClick={() => setIsAdmin(false)}>
                Logout
              </Button>
            </div>
            
            <Tabs defaultValue="courses" className="w-full">
              <TabsList>
                <TabsTrigger value="courses">Manage Courses</TabsTrigger>
                <TabsTrigger value="users">Manage Users</TabsTrigger>
                <TabsTrigger value="certificates">Certificates</TabsTrigger>
              </TabsList>
              
              <TabsContent value="courses" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Add New Course</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      <Input placeholder="Course Title" />
                      <Input placeholder="Icon Class (e.g., fab fa-html5)" />
                      <Button>Add Course</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Existing Courses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(courses).map(([key, course]) => (
                        <div key={key} className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-semibold">{course.title}</h4>
                            <p className="text-sm text-gray-500">{course.videos.length} videos</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <FaEdit className="mr-2" /> Edit
                            </Button>
                            <Button variant="destructive" size="sm">
                              <FaTrash className="mr-2" /> Delete
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="users" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Add New User</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <Input
                        placeholder="Full Name"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                      />
                      <Input
                        placeholder="Email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                      />
                      <Select
                        value={newUser.role}
                        onValueChange={(value) => setNewUser({ ...newUser, role: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="instructor">Instructor</SelectItem>
                          <SelectItem value="admin">Admin</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select
                        value={newUser.status}
                        onValueChange={(value) => setNewUser({ ...newUser, status: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="inactive">Inactive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button onClick={addNewUser} className="mt-4">Add User</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Users</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>User</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Joined</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                                  {user.name.charAt(0)}
                                </div>
                                <div>
                                  <div className="font-medium">{user.name}</div>
                                  <div className="text-sm text-gray-500">{user.email}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell className="capitalize">{user.role}</TableCell>
                            <TableCell>
                              <Badge variant={user.status === "active" ? "default" : "secondary"}>
                                {user.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{new Date(user.joinDate).toLocaleDateString()}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <FaEdit />
                                </Button>
                                <Button variant="destructive" size="sm" onClick={() => deleteUser(user.id)}>
                                  <FaTrash />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="certificates" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Issue New Certificate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Select
                        value={newCertificate.userId}
                        onValueChange={(value) => setNewCertificate({ ...newCertificate, userId: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a user" />
                        </SelectTrigger>
                        <SelectContent>
                          {users.map((user) => (
                            <SelectItem key={user.id} value={user.id.toString()}>
                              {user.name} ({user.email})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select
                        value={newCertificate.courseKey}
                        onValueChange={(value) => setNewCertificate({ ...newCertificate, courseKey: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          {Object.entries(courses).map(([key, course]) => (
                            <SelectItem key={key} value={key}>
                              {course.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button onClick={issueCertificate} className="mt-4">Issue Certificate</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Issued Certificates</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Certificate ID</TableHead>
                          <TableHead>User</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead>Issue Date</TableHead>
                          <TableHead>Verification Code</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {certificates.map((cert) => (
                          <TableRow key={cert.id}>
                            <TableCell className="font-mono">{cert.id}</TableCell>
                            <TableCell>{cert.userName}</TableCell>
                            <TableCell>{cert.course}</TableCell>
                            <TableCell>{new Date(cert.issueDate).toLocaleDateString()}</TableCell>
                            <TableCell className="font-mono text-sm">{cert.verificationCode}</TableCell>
                            <TableCell>
                              <Badge variant={cert.status === "active" ? "default" : "secondary"}>
                                {cert.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">
                                  <FaEye />
                                </Button>
                                <Button 
                                  variant={cert.status === "active" ? "destructive" : "default"} 
                                  size="sm"
                                  onClick={() => toggleCertificateStatus(cert.id)}
                                >
                                  {cert.status === "active" ? "Revoke" : "Activate"}
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* About Section */}
        {currentSection === "about" && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">About DevLearn Pro</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-600">
              DevLearn Pro is a comprehensive platform for learning web development. We provide interactive courses, community support, and verified certificates to help you advance your career.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <FaGraduationCap className="text-4xl mx-auto mb-4 text-indigo-600" />
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    To make web development education accessible to everyone, everywhere.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <FaUsers className="text-4xl mx-auto mb-4 text-indigo-600" />
                  <CardTitle>Global Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Serving learners from over 100 countries worldwide.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <FaTrophy className="text-4xl mx-auto mb-4 text-indigo-600" />
                  <CardTitle>Success Stories</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Thousands of students have launched their careers after completing our courses.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
  <footer className="bg-white text-gray-900 py-6 mt-10 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between max-w-4xl mx-auto gap-2 py-2">
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">DevLearn Pro</h3>
              <p className="text-gray-600 text-xs">Master web development with our interactive courses.</p>
            </div>
            <div className="flex flex-row gap-4 w-full md:w-auto">
              <Accordion type="multiple" className="flex flex-row gap-4 w-full md:w-auto">
                <AccordionItem value="quick-links" className="min-w-[120px]">
                  <AccordionTrigger className="py-1 text-base font-semibold">Quick Links</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-gray-600">
                      {["home", "courses", "dashboard", "certificate"].map((section) => (
                        <li key={section}>
                          <button
                            onClick={() => showSection(section)}
                            className="hover:text-indigo-600 transition-colors"
                          >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="contact-us" className="min-w-[120px]">
                  <AccordionTrigger className="py-1 text-base font-semibold">Contact Us</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <FaEnvelope /> chimekosisochukwu5@gmail.com
                      </li>
                      <li className="flex items-center gap-2">
                        <FaPhone /> +1 (123) 456-7890
                      </li>
                      <li className="flex items-center gap-2">
                        <FaMapMarkerAlt /> San Francisco, CA
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="follow-us" className="min-w-[120px]">
                  <AccordionTrigger className="py-1 text-base font-semibold">Follow Us</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex gap-2 flex-wrap">
                      <a
                        href="https://www.facebook.com/profile.php?id=100081971809699"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center transition-colors hover:bg-blue-100 hover:text-blue-600"
                      >
                        <FaFacebook />
                      </a>
                      {[
                        { icon: FaTwitter, color: "hover:text-blue-400", bg: "hover:bg-blue-50" },
                        { icon: FaInstagram, color: "hover:text-pink-500", bg: "hover:bg-pink-50" },
                        { icon: FaLinkedin, color: "hover:text-blue-600", bg: "hover:bg-blue-50" },
                        { icon: FaYoutube, color: "hover:text-red-500", bg: "hover:bg-red-50" }
                      ].map(({ icon: Icon, color, bg }, index) => (
                        <a
                          key={index}
                          href="#"
                          className={`w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center transition-colors ${color} ${bg}`}
                        >
                          <Icon />
                        </a>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-2 mt-2 text-center text-gray-600 text-xs">
            <p>&copy; 2023 DevLearn Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}