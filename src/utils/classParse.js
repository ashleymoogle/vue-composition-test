const classParse = (data) => {
  console.log('raw', data)
  const body = data.body.class
  return {
    title: body.__name,
    baseContent: {
      source: body.__content.resources[0].content[0].description, //TODO: More descriptive keys
      description: body.__content.description, //TODO: More descriptive keys
      baseSkills: {
        level1: body.competences.skill_points.level1.expression,
        leveling: body.competences.skill_points.every_level.expression
      },
      hp: body.competences.starting_life.expr,
      gold: body.competences.starting_gold.expr,
      alignment: body.competences?.alignment?.text ?? ''
    },
    skills: body.competences.class_skills.reduce((acc, item) => {
      const skill = {
        name: item.name,
        ability: item.main_ability.acronym
      }
      acc.push(skill)
      return acc
    }, []),
    table: body.competences.class_table.data,
    classAbilities: {
      gear: body.aptitude_de_classe.__content, //TODO: prune this and split by class ability
      feats: body.aptitude_de_classe.dons_liers_aux_aptitudes //TODO: Is it relevant?
    }
  }
}

export default classParse
