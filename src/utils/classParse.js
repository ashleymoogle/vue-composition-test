const classParse = (data) => {
  console.log(data)
  const title = data.__metadata.title.toLowerCase()
  return {
    title: data.__metadata.title,
    baseContent: {
      source: data.body[title].__content.resources[0].content[0].description,
      description: data.body[title].__content.description,
      baseSkills: {
        level1: data.body[title].competences.__content[0].level1.expression,
        leveling: data.body[title].competences.__content[0].leveling.expression
      },
      hp: data.body[title].competences.__content[1].life.expr,
      gold: data.body[title].competences.__content[1].gold.expr,
      alignment: data.body[title].competences.__content[1]?.alignment ?? ''
    },
    skills: data.body[title].competences.__content[0].skills.reduce((acc, item) => {
      const skill = {
        name: item.name,
        ability: item.main_ability.acronym
      }
      acc.push(skill)
      return acc
    }, []),
    table: data.body[title].competences.__content[2],
    classAbilities: {
      gear: data.body[title].aptitude_de_classe.__content,
      feats: data.body[title].aptitude_de_classe.dons_liers_aux_aptitudes
    }
  }
}

export default classParse
