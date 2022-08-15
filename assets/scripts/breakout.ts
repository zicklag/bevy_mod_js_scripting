function filterComponentInfos(
  infos: ComponentInfo[],
  prefix: string
): string[] {
  return infos
    .filter((info) => info.name.startsWith(prefix))
    .map((info) => info.name.replace(prefix, ""));
}

let firstIteration = true;
let i = 0;

type Scoreboard = {
  score: number;
};
const Scoreboard: BevyType<Scoreboard> = { typeName: "breakout::Scoreboard" };

function run() {
  i++;
  if (i % 60 == 0) {
    let score = world.resource(Scoreboard);
    score.score += 1;
    info(score.score);
  }

  if (firstIteration) {
    firstIteration = false;
    // info("Components: " + filterComponentInfos(world.components, "bevy_transform::"));
    // info("Resources: " + filterComponentInfos(world.resources, "breakout::").join(", "));
  }
}

export default {
  update: run,
};
