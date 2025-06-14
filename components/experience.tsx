import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Staff Software Engineer",
      company: "RR Donnelley",
      location: "Austin, TX",
      period: "May 2023 - Present",
      achievements: [
        "Developed a Spark application to efficiently parse and anonymize 50 TB of S3 data, removing PII based on customer deletion requests",
        "Led implementation of Snowflake across multiple teams, resulting in improved data management and cost savings",
        "Collaborated with cross-functional teams to refactor Spark code, reducing SageMaker infrastructure expenses by 40%",
        "Designed serverless architecture to capture LLM API usage data via SQS and Lambda for granular cost analysis",
        "Implemented S3 lifecycle configurations, reducing storage costs by $120K annually",
      ],
      technologies: ["Apache Spark", "Snowflake", "AWS", "Lambda", "SQS", "S3"],
    },
    {
      title: "Software Development Engineer",
      company: "Amazon Web Services",
      location: "Seattle, WA",
      period: "Jul 2022 - Apr 2023",
      achievements: [
        "Designed serverless application using Lambda, Kinesis, SQS, and SNS to process high velocity (4k records/sec) real-time data",
        "Served as on-call engineer, ensuring service availability and responding to incidents",
        "Worked with stakeholders to define and implement SLOs and SLAs",
        "Participated in post-incident reviews and root cause analyses for continuous improvement",
      ],
      technologies: ["AWS Lambda", "Kinesis", "SQS", "SNS", "Real-time Processing"],
    },
    {
      title: "Data Scientist | Teaching Assistant",
      company: "MU Institute for Data Science and Informatics",
      location: "Columbia, MO",
      period: "Jan 2021 - Jul 2022",
      achievements: [
        "Predicted Acute Kidney Injury (AKI) using novel Residual Time-Gated LSTM architecture, improving accuracy by 7%",
        "Developed Ensembled SVM model with probabilistic estimates, boosting classification accuracy by 6%",
        "Built scalable ETL pipelines for large datasets with data validation",
        "Assisted in course delivery for Data Mining, Database Analytics, and Network Analytics",
      ],
      technologies: ["LSTM", "SVM", "Detectron2", "ETL", "Python", "Machine Learning"],
    },
    {
      title: "Technical Analyst",
      company: "Axtria Ingenious Insights",
      location: "Noida, India",
      period: "Dec 2018 - Dec 2020",
      achievements: [
        "Optimized testing process by automating workflow, reducing human effort by 60 hours/month",
        "Created standardized documentation process, reducing transition efforts by 50%",
        "Worked as Java engineer specializing in automation testing using Selenium and TestNG",
        "Developed and maintained test suites and frameworks for efficient application testing",
      ],
      technologies: ["Java", "Selenium", "TestNG", "Automation Testing"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Work Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-primary">{exp.company}</CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
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
