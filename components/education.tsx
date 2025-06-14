import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, CalendarDays, MapPin } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Masters in Computer Science",
      school: "University of Missouri - Columbia",
      location: "Columbia, Missouri, United States",
      period: "Jan 2021 - Jul 2022",
      gpa: "3.9/4.0",
      coursework: [
        "Cloud Computing",
        "Machine Learning and Pattern Recognition",
        "Unsupervised Learning",
        "Advanced Web Development",
        "Computational Intelligence",
        "Principles of BigData Management",
        "Advanced Natural Language Processing",
        "Artificial Intelligence",
      ],
    },
    {
      degree: "Integrated Post Graduation in Information Technology",
      school: "ABV-IIITM (Atal Bihari Vajpayee-Indian Institute of Information Technology and Management)",
      location: "Gwalior, India",
      period: "Jul 2015 - Jun 2020",
      gpa: "7.2/10",
      achievements: ["Selected for Merit-cum-Means scholarship (Top 10 promising students)"],
      coursework: [
        "Computer Vision",
        "Data Structures and Algorithms",
        "Object Oriented Programming",
        "Computer Networks",
        "Operating Systems",
        "Computer Organization and Architecture",
        "Database Management Systems",
        "Data Mining and Data Warehousing",
        "Natural Language Processing",
      ],
    },
  ]

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Education</h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary mb-2">{edu.school}</CardDescription>
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <CalendarDays className="h-4 w-4 mr-1" />
                          {edu.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                      <div className="mt-2">
                        <Badge variant="secondary">GPA: {edu.gpa}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {edu.achievements && (
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Achievements:</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
