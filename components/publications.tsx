import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Award } from "lucide-react"

export function Publications() {
  const publications = [
    {
      title: "Continuous Anticipation of AKI in the ICU using Time-Gated LSTMs",
      venue: "AMIA CIC",
      year: "2022",
      authors: "L. Karanam et al.",
      type: "Conference Paper",
    },
    {
      title: "Classifying Cover Crop Residue from RGB Images: a Simple SVM versus a SVM Ensemble",
      venue: "IEEE SSCI",
      year: "2021",
      authors: "L. Karanam et al.",
      type: "Conference Paper",
    },
    {
      title: "Intrusion detection mechanism for large scale networks using CNN-LSTM",
      venue: "IEEE Xplore",
      year: "2020",
      authors: "L. Karanam, K. K. Pattanaik, and R. Aldmour",
      type: "Journal Paper",
    },
  ]

  const grants = [
    {
      title:
        "Understanding Personal, Social Network, and Social Network Contributors to Firearm Risks among Young Adults Experiencing Homelessness",
      organization: "Centers for Disease Control and Prevention",
      year: "2022",
      amount: "$1,700,000",
      role: "Research Assistant",
      pi: "Hsun-Ta Hsu",
    },
  ]

  const certifications = [
    "Databricks Certified Generative AI Engineer Associate",
    "Hands on Deep Learning by PadhAI",
    "Machine Learning by Coursera",
  ]

  return (
    <section id="publications" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Research & Achievements</h2>

          {/* Publications */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-2 text-primary" />
              Publications
            </h3>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{pub.title}</CardTitle>
                    <CardDescription>
                      {pub.authors} • {pub.venue} • {pub.year}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">{pub.type}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Grant Proposals */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-primary" />
              Grant Proposals
            </h3>
            <div className="space-y-4">
              {grants.map((grant, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{grant.title}</CardTitle>
                    <CardDescription>
                      {grant.organization} • {grant.year} • PI: {grant.pi}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Badge variant="secondary">Total Funding: {grant.amount}</Badge>
                      <Badge variant="outline">Role: {grant.role}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Certifications</h3>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert, index) => (
                    <Badge key={index} variant="outline">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
