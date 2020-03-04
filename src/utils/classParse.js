
const classParse = (data) => {
  console.log('raw', data)
  const body = data.body.class
  return {
    title: body.__name,
    baseContent: {
      source: body.description.resources.reduce((acc, item) => {
        acc.push(item.content[0].text)
        return acc
      }, []),
      description: body.description.text,
      baseSkills: {
        level1: body.skills.skill_points.level1.expression,
        leveling: body.skills.skill_points.every_level.expression
      },
      hp: body.skills.starting_life.expr,
      gold: body.skills.starting_gold.expr,
      alignment: body.skills?.alignment?.text ?? ''
    },
    skills: body.skills.class_skills.reduce((acc, item) => {
      const skill = {
        name: item.name,
        ability: item.main_ability.acronym
      }
      acc.push(skill)
      return acc
    }, []),
    table: body.skills.class_table.data,
    features: {
      gear: body.aptitude_de_classe.gear.description,
      feats: body.aptitude_de_classe.dons_lies_aux_aptitudes.for_feature,
      classFeatures: body.aptitude_de_classe.features
    }
  }
}

export default classParse
