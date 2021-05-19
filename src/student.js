class Student {
  constructor (name, skillLevel)
  {
      this.name = name
      this.skillLevel = skillLevel
      this.assignments = []
  }

  study ()
  {
      if (this.skillLevel < 100)
      {
          this.skillLevel += 1
          return this
      }
    return this
  }

  doHomework (objt=0)
  {
      if (objt === 0)
      {
        this.assignments.forEach(assignment => 
            {
                if (assignment.skillLevel <= this.skillLevel)
                {
                    assignment.completed = true
                }
                else
                {
                    assignment.completed = false
                }
            })
      }
      
      else
      {
          if (objt.skillLevel >= 1 && objt.skillLevel <= 100)
          {
            if (objt.skillLevel <= this.skillLevel)
            {
                objt.completed = true
                this.assignments.push(objt)
            }
            else
            {
                objt.completed = false
                this.assignments.push(objt)
            }
          }
      }
  }
}

module.exports = Student
