const units = [UnitTypes.alpha,UnitTypes.beta,UnitTypes.gamma];
units.forEach(e=>e.abilities.add(UnitTypes.renale.abilities.get(0)));
UnitTypes.alpha.abilities.get(0).percentAmount = 0.0417;
UnitTypes.beta.abilities.get(0).percentAmount = 0.0556;
UnitTypes.gamma.abilities.get(0).percentAmount = 0.0834;