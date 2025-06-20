export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "Java", "JavaScript", "PHP", "SQL", "LaTeX"],
    },
    {
      title: "Web Development",
      skills: ["React", "Angular", "HTML5", "CSS3", "SCSS", "Bootstrap", "RESTful APIs"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "SQLite", "MongoDB", "Firebase", "Snowflake"],
    },
    {
      title: "Cloud Computing",
      skills: ["Amazon Web Services", "Microsoft Azure"],
    },
    {
      title: "Data Science & ML",
      skills: ["Scikit-Learn", "NumPy", "Pandas", "SciPy", "NLTK", "Matplotlib", "Statsmodels"],
    },
    {
      title: "Big Data & Processing",
      skills: ["Apache Spark", "PySpark", "Snowpark", "Hadoop"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="card">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="badge badge-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
