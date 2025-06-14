import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Card>
                <CardContent className="p-6">
                  <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                I'm a Software Engineer with 5 years of experience specializing in ML model deployment, MLOps, and big
                data technologies in cloud environments. Currently working as a Staff Software Engineer at RR Donnelley,
                where I lead implementation of cutting-edge data solutions.
              </p>

              <p className="text-lg text-muted-foreground">
                Proficient in tools and frameworks like TensorFlow, PyTorch, Hadoop, Spark, and NoSQL databases, with
                expertise in designing scalable ETL pipelines and data workflows on AWS and Azure. I'm passionate about
                leveraging cloud technologies and staying updated on advancements in ML and big data.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h3 className="font-semibold mb-2">Experience</h3>
                  <p className="text-muted-foreground">5+ Years</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Current Role</h3>
                  <p className="text-muted-foreground">Staff Software Engineer</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">MS Computer Science</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Publications</h3>
                  <p className="text-muted-foreground">3+ Research Papers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
