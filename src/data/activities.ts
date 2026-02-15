import { Activity } from '@/types';

export const activities: Activity[] = [
  // ===== INDOOR LOW ENERGY =====
  {
    id: 'puzzle-time',
    title: 'Jigsaw Puzzle Time',
    description: 'Quiet concentration with age-appropriate puzzles',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 2,
    duration: 30,
    suppliesNeeded: ['Jigsaw puzzle'],
    tags: ['quiet', 'concentration', 'brain'],
    instructions: [
      'Choose age-appropriate puzzle (12-100 pieces)',
      'Set up on flat surface',
      'Start with edges and corners',
      'Work together or take turns'
    ]
  },
  {
    id: 'story-reading',
    title: 'Story Time Adventure',
    description: 'Cosy reading session with favourite books',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 1,
    duration: 20,
    suppliesNeeded: ['Books'],
    tags: ['reading', 'imagination', 'bonding'],
    instructions: [
      'Create a cosy reading nook',
      'Let child choose the book',
      'Use different voices for characters',
      'Ask questions about the story'
    ]
  },
  {
    id: 'playdough-create',
    title: 'Playdough Creations',
    description: 'Sculpt and create with colourful playdough',
    ageGroups: ['2-4', '5-7'],
    energy: 'low',
    location: 'indoor',
    prepTime: 3,
    duration: 45,
    suppliesNeeded: ['Playdough', 'Cookie cutters', 'Rolling pin'],
    tags: ['creative', 'fine-motor', 'imaginative'],
    instructions: [
      'Cover surface with plastic mat',
      'Give each child different colours',
      'Show basic techniques: rolling, cutting, stamping',
      'Let imagination run wild!'
    ]
  },
  {
    id: 'colouring-book',
    title: 'Mindful Colouring',
    description: 'Calm colouring session with favourite characters',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 2,
    duration: 25,
    suppliesNeeded: ['Colouring books', 'Crayons/pencils'],
    tags: ['creative', 'calm', 'focus'],
    instructions: [
      'Choose age-appropriate colouring books',
      'Set up comfortable workspace',
      'Play soft music if desired',
      'Encourage creativity over perfection'
    ]
  },
  {
    id: 'building-blocks',
    title: 'Tower Building Challenge',
    description: 'Build the tallest tower or create amazing structures',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 2,
    duration: 30,
    suppliesNeeded: ['Building blocks', 'Lego'],
    tags: ['STEM', 'problem-solving', 'creative'],
    instructions: [
      'Clear floor space for building',
      'Challenge: build tallest tower that stands',
      'Try theme builds: castle, spaceship, house',
      'Take photos of creations'
    ]
  },
  {
    id: 'sticker-art',
    title: 'Sticker Scene Creator',
    description: 'Create pictures and scenes using stickers',
    ageGroups: ['2-4', '5-7'],
    energy: 'low',
    location: 'indoor',
    prepTime: 2,
    duration: 20,
    suppliesNeeded: ['Stickers', 'Paper'],
    tags: ['creative', 'fine-motor', 'quiet'],
    instructions: [
      'Give each child a blank sheet',
      'Set out sticker packs by theme',
      'Create scenes: garden, farm, underwater',
      'Display finished artwork'
    ]
  },
  {
    id: 'dot-to-dot',
    title: 'Connect the Dots',
    description: 'Follow numbers to reveal hidden pictures',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 1,
    duration: 15,
    suppliesNeeded: ['Dot-to-dot books', 'Pencils'],
    tags: ['educational', 'numbers', 'quiet'],
    instructions: [
      'Start with simple ones for younger kids',
      'Follow the numbers carefully',
      'Colour in the finished picture',
      'Try creating your own dot-to-dot'
    ]
  },
  {
    id: 'origami',
    title: 'Paper Folding Fun',
    description: 'Learn to fold paper animals and shapes',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 2,
    duration: 30,
    suppliesNeeded: ['Square paper', 'Instructions'],
    tags: ['STEM', 'patience', 'creative'],
    instructions: [
      'Start with simple folds: boat, hat, plane',
      'Follow step-by-step instructions carefully',
      'Decorate finished creations',
      'Display on shelf or give as gifts'
    ]
  },
  {
    id: 'shadow-puppets',
    title: 'Shadow Puppet Theatre',
    description: 'Make shadow shapes on the wall with a torch',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 2,
    duration: 20,
    suppliesNeeded: ['Torch'],
    tags: ['imaginative', 'storytelling', 'creative'],
    instructions: [
      'Darken the room and aim torch at wall',
      'Learn basic hand shapes: dog, bird, rabbit',
      'Make up stories with shadow characters',
      'Try cutting shapes from card for more detail'
    ]
  },
  {
    id: 'letter-writing',
    title: 'Letter to Grandparents',
    description: 'Write or draw a letter to someone special',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 3,
    duration: 20,
    suppliesNeeded: ['Paper', 'Pens', 'Envelope', 'Stamp'],
    tags: ['writing', 'thoughtful', 'communication'],
    instructions: [
      'Think about who to write to',
      'Younger kids can draw pictures instead',
      'Add stickers or decorations',
      'Post it together for excitement'
    ]
  },
  {
    id: 'board-games',
    title: 'Family Board Game',
    description: 'Classic board games for the whole family',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 3,
    duration: 45,
    suppliesNeeded: ['Board game'],
    tags: ['strategy', 'family', 'social'],
    instructions: [
      'Pick age-appropriate game',
      'Read rules together',
      'Take turns fairly',
      'Focus on fun, not winning'
    ]
  },
  {
    id: 'card-games',
    title: 'Card Game Fun',
    description: 'Simple card games like Snap, Go Fish, or Pairs',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 1,
    duration: 20,
    suppliesNeeded: ['Playing cards'],
    tags: ['strategy', 'memory', 'social'],
    instructions: [
      'Start with Snap for younger kids',
      'Go Fish is great for learning numbers',
      'Memory/Pairs builds concentration',
      'Teach new games gradually'
    ]
  },
  {
    id: 'audiobook-listen',
    title: 'Audiobook Adventure',
    description: 'Listen to an exciting story together',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 2,
    duration: 30,
    suppliesNeeded: ['Speaker or tablet'],
    tags: ['listening', 'imagination', 'relaxing'],
    instructions: [
      'Pick an age-appropriate audiobook or podcast',
      'Get comfy with blankets and cushions',
      'Pause to discuss exciting parts',
      'Draw pictures of favourite scenes after'
    ]
  },
  {
    id: 'sorting-games',
    title: 'Sorting and Matching',
    description: 'Sort objects by colour, shape, or size',
    ageGroups: ['2-4'],
    energy: 'low',
    location: 'indoor',
    prepTime: 3,
    duration: 15,
    suppliesNeeded: ['Mixed household items'],
    tags: ['educational', 'fine-motor', 'cognitive'],
    instructions: [
      'Gather safe household items of different colours',
      'Sort by colour into piles',
      'Try sorting by size: big, medium, small',
      'Match pairs of socks or shoes'
    ]
  },

  // ===== INDOOR MEDIUM ENERGY =====
  {
    id: 'indoor-bowling',
    title: 'Hallway Bowling',
    description: 'Set up bowling with household items',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'medium',
    location: 'indoor',
    prepTime: 5,
    duration: 20,
    suppliesNeeded: ['Empty bottles', 'Soft ball'],
    tags: ['sports', 'coordination', 'fun'],
    instructions: [
      'Set up 6-10 empty bottles as pins',
      'Mark throwing line with tape',
      'Use soft ball or rolled socks',
      'Keep score and celebrate strikes!'
    ]
  },
  {
    id: 'dance-freeze',
    title: 'Dance Freeze Game',
    description: 'Dance until the music stops, then freeze!',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'medium',
    location: 'indoor',
    prepTime: 1,
    duration: 15,
    suppliesNeeded: ['Music player'],
    tags: ['music', 'movement', 'listening'],
    instructions: [
      'Play upbeat music',
      'Dance freely around the room',
      'When music stops, freeze like a statue',
      'Try different freeze poses: animals, shapes'
    ]
  },
  {
    id: 'treasure-hunt',
    title: 'Indoor Treasure Hunt',
    description: 'Follow clues to find hidden treasure',
    ageGroups: ['5-7', '8-10'],
    energy: 'medium',
    location: 'indoor',
    prepTime: 10,
    duration: 25,
    suppliesNeeded: ['Paper', 'Pen', 'Small prizes'],
    tags: ['adventure', 'problem-solving', 'reading'],
    instructions: [
      'Write 5-7 clues leading around the house',
      'Hide small treats or toys at the end',
      'Make clues age-appropriate',
      'Give hints if they get stuck'
    ]
  },
  {
    id: 'balloon-volleyball',
    title: 'Balloon Volleyball',
    description: 'Gentle volleyball using balloons',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'medium',
    location: 'indoor',
    prepTime: 2,
    duration: 15,
    suppliesNeeded: ['Balloons', 'String/rope'],
    tags: ['sports', 'coordination', 'teamwork'],
    instructions: [
      'Blow up balloons',
      'Set up "net" with string between chairs',
      'Keep balloon in air - no touching ground',
      'Play cooperatively or keep score'
    ]
  },
  {
    id: 'puppet-show',
    title: 'Sock Puppet Theatre',
    description: 'Create and perform with sock puppets',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'medium',
    location: 'indoor',
    prepTime: 15,
    duration: 30,
    suppliesNeeded: ['Socks', 'Markers', 'Buttons'],
    tags: ['creative', 'dramatic', 'storytelling'],
    instructions: [
      'Decorate socks with markers and buttons',
      'Create simple characters',
      'Set up behind sofa for stage',
      'Perform favourite stories or make up new ones'
    ]
  },
  {
    id: 'simon-says',
    title: 'Simon Says',
    description: 'Classic listening and following game',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'medium',
    location: 'indoor',
    prepTime: 0,
    duration: 15,
    suppliesNeeded: [],
    tags: ['listening', 'movement', 'traditional'],
    instructions: [
      'One person is Simon and gives commands',
      'Only follow commands that start with "Simon says"',
      'Start easy: touch your nose, jump up',
      'Get trickier as the game goes on'
    ]
  },
  {
    id: 'charades',
    title: 'Family Charades',
    description: 'Act out words without speaking',
    ageGroups: ['5-7', '8-10'],
    energy: 'medium',
    location: 'indoor',
    prepTime: 5,
    duration: 25,
    suppliesNeeded: ['Paper', 'Pen', 'Hat/bowl'],
    tags: ['acting', 'social', 'laughter'],
    instructions: [
      'Write animals, actions, or objects on slips',
      'Take turns pulling a word and acting it out',
      'No talking or pointing at objects',
      'Use a timer for extra excitement'
    ]
  },
  {
    id: 'dress-up',
    title: 'Dress-Up Fashion Show',
    description: 'Raid the wardrobe for a fashion parade',
    ageGroups: ['2-4', '5-7'],
    energy: 'medium',
    location: 'indoor',
    prepTime: 5,
    duration: 30,
    suppliesNeeded: ['Old clothes', 'Accessories', 'Hats'],
    tags: ['creative', 'dramatic', 'silly'],
    instructions: [
      'Gather old clothes, scarves, hats and shoes',
      'Create different outfits and characters',
      'Walk the "runway" down the hallway',
      'Take photos of the best outfits'
    ]
  },
  {
    id: 'musical-statues',
    title: 'Musical Statues',
    description: 'Dance and freeze when the music stops',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'medium',
    location: 'indoor',
    prepTime: 1,
    duration: 15,
    suppliesNeeded: ['Music player'],
    tags: ['music', 'movement', 'listening'],
    instructions: [
      'Play music and dance around the room',
      'Stop the music suddenly',
      'Everyone must freeze completely',
      'Last person to freeze is out (or just for fun)'
    ]
  },
  {
    id: 'yoga-kids',
    title: 'Animal Yoga',
    description: 'Fun yoga poses named after animals',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'medium',
    location: 'indoor',
    prepTime: 2,
    duration: 20,
    suppliesNeeded: ['Yoga mat or carpet'],
    tags: ['exercise', 'mindful', 'balance'],
    instructions: [
      'Try cat pose, cow pose, downward dog',
      'Make animal sounds with each pose',
      'Hold poses for 5 breaths',
      'End with a quiet relaxation'
    ]
  },
  {
    id: 'floor-is-lava',
    title: 'The Floor Is Lava',
    description: 'Get around the room without touching the floor',
    ageGroups: ['5-7', '8-10'],
    energy: 'medium',
    location: 'indoor',
    prepTime: 3,
    duration: 15,
    suppliesNeeded: ['Cushions', 'Pillows'],
    tags: ['physical', 'imaginative', 'challenge'],
    instructions: [
      'Scatter cushions and pillows around the room',
      'Shout "the floor is lava!"',
      'Get from one side to the other on cushions only',
      'Set challenges: reach the kitchen and back'
    ]
  },
  {
    id: 'indoor-hopscotch',
    title: 'Indoor Hopscotch',
    description: 'Hopscotch grid with tape on the floor',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'medium',
    location: 'indoor',
    prepTime: 5,
    duration: 20,
    suppliesNeeded: ['Masking tape', 'Small beanbag'],
    tags: ['physical', 'counting', 'coordination'],
    instructions: [
      'Make hopscotch grid on floor with masking tape',
      'Number each square',
      'Toss beanbag and hop to it',
      'Peels off easily when done'
    ]
  },

  // ===== INDOOR HIGH ENERGY =====
  {
    id: 'pillow-fort',
    title: 'Epic Pillow Fort',
    description: 'Build an amazing fort with pillows and blankets',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'high',
    location: 'indoor',
    prepTime: 5,
    duration: 45,
    suppliesNeeded: ['Pillows', 'Blankets', 'Chairs'],
    tags: ['building', 'imaginative', 'cosy'],
    instructions: [
      'Gather all pillows and blankets',
      'Use chairs/sofa as fort structure',
      'Create entrance and windows',
      'Add torches (phones) for ambience'
    ]
  },
  {
    id: 'obstacle-course',
    title: 'Living Room Obstacle Course',
    description: 'Navigate through homemade obstacles',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'high',
    location: 'indoor',
    prepTime: 10,
    duration: 20,
    suppliesNeeded: ['Cushions', 'Tape', 'Chairs'],
    tags: ['physical', 'coordination', 'challenge'],
    instructions: [
      'Set up course: crawl under chairs, hop on cushions',
      'Use tape lines to balance on',
      'Time each attempt',
      'Make it harder or easier as needed'
    ]
  },
  {
    id: 'indoor-camping',
    title: 'Indoor Camping Adventure',
    description: 'Camp out in the living room',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'high',
    location: 'indoor',
    prepTime: 15,
    duration: 60,
    suppliesNeeded: ['Sleeping bags', 'Torches', 'Snacks'],
    tags: ['adventure', 'imaginative', 'special'],
    instructions: [
      'Set up "tent" with blankets',
      'Lay out sleeping bags',
      'Tell stories with torchlight',
      'Have camping snacks'
    ]
  },
  {
    id: 'pillow-fight',
    title: 'Epic Pillow Fight',
    description: 'Soft pillow battle with clear rules',
    ageGroups: ['5-7', '8-10'],
    energy: 'high',
    location: 'indoor',
    prepTime: 2,
    duration: 10,
    suppliesNeeded: ['Soft pillows'],
    tags: ['physical', 'silly', 'energy-burn'],
    instructions: [
      'Clear the area of anything breakable',
      'Use only soft pillows (no cushions with zips)',
      'Aim below shoulders only',
      'Set a timer - 5 minute rounds'
    ]
  },
  {
    id: 'nerf-target',
    title: 'Nerf Target Practice',
    description: 'Set up targets and practice aim',
    ageGroups: ['5-7', '8-10'],
    energy: 'high',
    location: 'indoor',
    prepTime: 5,
    duration: 20,
    suppliesNeeded: ['Nerf guns', 'Plastic cups'],
    tags: ['aim', 'challenge', 'competitive'],
    instructions: [
      'Stack plastic cups in pyramids',
      'Set up at different distances',
      'Take turns and keep score',
      'Award points for harder targets'
    ]
  },

  // ===== OUTDOOR LOW ENERGY =====
  {
    id: 'nature-walk',
    title: 'Nature Detective Walk',
    description: 'Explore and discover nature treasures',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'outdoor',
    prepTime: 3,
    duration: 30,
    suppliesNeeded: ['Collection bag', 'Magnifying glass'],
    tags: ['nature', 'learning', 'fresh-air'],
    instructions: [
      'Bring bag for collecting leaves, stones',
      'Look for different shapes and colours',
      'Use magnifying glass for close inspection',
      'Discuss what you find'
    ]
  },
  {
    id: 'chalk-art',
    title: 'Sidewalk Chalk Masterpiece',
    description: 'Create colourful artwork on pavement',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'outdoor',
    prepTime: 2,
    duration: 45,
    suppliesNeeded: ['Sidewalk chalk'],
    tags: ['creative', 'artistic', 'collaborative'],
    instructions: [
      'Choose safe paved area',
      'Start with simple shapes and progress',
      'Create hopscotch court',
      'Take photos before rain washes away'
    ]
  },
  {
    id: 'garden-exploration',
    title: 'Garden Explorer Mission',
    description: 'Investigate plants, insects, and garden life',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'outdoor',
    prepTime: 2,
    duration: 25,
    suppliesNeeded: ['Notebook', 'Pencil'],
    tags: ['nature', 'science', 'observation'],
    instructions: [
      'Look for different types of plants',
      'Count petals on flowers',
      'Spot insects and beetles',
      'Draw or note interesting findings'
    ]
  },
  {
    id: 'cloud-watching',
    title: 'Cloud Shape Spotting',
    description: 'Lie back and find shapes in the clouds',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'outdoor',
    prepTime: 1,
    duration: 20,
    suppliesNeeded: ['Blanket'],
    tags: ['relaxing', 'imagination', 'mindful'],
    instructions: [
      'Lay blanket on grass',
      'Lie down and look up at sky',
      'Take turns pointing out cloud shapes',
      'Make up stories about cloud characters'
    ]
  },
  {
    id: 'bird-watching',
    title: 'Garden Bird Watching',
    description: 'Spot and identify birds in the garden',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'outdoor',
    prepTime: 3,
    duration: 30,
    suppliesNeeded: ['Binoculars', 'Bird ID chart'],
    tags: ['nature', 'patience', 'learning'],
    instructions: [
      'Find a quiet spot near bird feeders or trees',
      'Stay still and quiet',
      'Note colours, size, and behaviour',
      'Keep a list of species spotted'
    ]
  },
  {
    id: 'leaf-rubbings',
    title: 'Leaf Rubbing Art',
    description: 'Create art by rubbing crayons over leaves',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'outdoor',
    prepTime: 5,
    duration: 25,
    suppliesNeeded: ['Paper', 'Crayons', 'Leaves'],
    tags: ['creative', 'nature', 'art'],
    instructions: [
      'Collect interesting leaves of different shapes',
      'Place leaf under paper',
      'Rub crayon gently over the top',
      'Try different colours for layered effects'
    ]
  },
  {
    id: 'mud-kitchen',
    title: 'Mud Kitchen Cooking',
    description: 'Make "meals" with mud, sticks, and leaves',
    ageGroups: ['2-4', '5-7'],
    energy: 'low',
    location: 'outdoor',
    prepTime: 5,
    duration: 40,
    suppliesNeeded: ['Old pots', 'Spoons', 'Water'],
    tags: ['sensory', 'imaginative', 'messy'],
    instructions: [
      'Set up old pots and utensils outside',
      'Mix mud with water for different textures',
      'Add leaves and petals as ingredients',
      'Create a mud kitchen menu'
    ]
  },
  {
    id: 'puddle-splashing',
    title: 'Puddle Jumping Adventure',
    description: 'Put on wellies and splash in puddles',
    ageGroups: ['2-4', '5-7'],
    energy: 'low',
    location: 'outdoor',
    prepTime: 5,
    duration: 20,
    suppliesNeeded: ['Wellies', 'Waterproof coat'],
    tags: ['sensory', 'rainy-day', 'joy'],
    instructions: [
      'Dress in waterproof gear',
      'Find the biggest puddles',
      'Jump and splash freely',
      'See who makes the biggest splash'
    ]
  },

  // ===== OUTDOOR MEDIUM ENERGY =====
  {
    id: 'water-play',
    title: 'Backyard Water Fun',
    description: 'Splash and play with water on warm days',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'medium',
    location: 'outdoor',
    prepTime: 5,
    duration: 45,
    suppliesNeeded: ['Water bottles', 'Cups', 'Sponges'],
    tags: ['sensory', 'cooling', 'summer'],
    season: 'summer',
    instructions: [
      'Set up water play station',
      'Use spray bottles for gentle water fights',
      'Wash toys or bikes',
      'Have towels ready for cleanup'
    ]
  },
  {
    id: 'scavenger-hunt',
    title: 'Outdoor Scavenger Hunt',
    description: 'Find specific items in nature',
    ageGroups: ['5-7', '8-10'],
    energy: 'medium',
    location: 'outdoor',
    prepTime: 5,
    duration: 30,
    suppliesNeeded: ['List', 'Collection bag'],
    tags: ['adventure', 'observation', 'achievement'],
    instructions: [
      'Create list: smooth stone, yellow flower, etc.',
      'Give each child a collection bag',
      'Check items off as found',
      'Discuss each item when found'
    ]
  },
  {
    id: 'bubble-play',
    title: 'Bubble Bonanza',
    description: 'Create and chase magical bubbles',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'medium',
    location: 'outdoor',
    prepTime: 3,
    duration: 20,
    suppliesNeeded: ['Bubble solution', 'Bubble wands'],
    tags: ['sensory', 'magical', 'chasing'],
    instructions: [
      'Open bubble solution carefully',
      'Blow bubbles gently for younger kids',
      'Try catching bubbles without popping',
      'Make giant bubbles with string wands'
    ]
  },
  {
    id: 'playground-visit',
    title: 'Playground Adventure',
    description: 'Explore local playground equipment',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'medium',
    location: 'outdoor',
    prepTime: 5,
    duration: 60,
    suppliesNeeded: ['Water bottle', 'Snacks'],
    tags: ['physical', 'social', 'exercise'],
    instructions: [
      'Choose age-appropriate playground',
      'Supervise younger children closely',
      'Encourage trying new equipment',
      'Bring water for hydration breaks'
    ]
  },
  {
    id: 'kite-flying',
    title: 'Kite Flying Day',
    description: 'Fly a kite in the park on a windy day',
    ageGroups: ['5-7', '8-10'],
    energy: 'medium',
    location: 'outdoor',
    prepTime: 5,
    duration: 30,
    suppliesNeeded: ['Kite'],
    tags: ['wind', 'outdoors', 'skill'],
    instructions: [
      'Find an open area away from trees and wires',
      'Face into the wind and let out string gradually',
      'Run to get it airborne if needed',
      'Take turns holding the string'
    ]
  },
  {
    id: 'frisbee',
    title: 'Frisbee Fun',
    description: 'Toss a frisbee back and forth',
    ageGroups: ['5-7', '8-10'],
    energy: 'medium',
    location: 'outdoor',
    prepTime: 1,
    duration: 20,
    suppliesNeeded: ['Frisbee'],
    tags: ['sports', 'coordination', 'catching'],
    instructions: [
      'Start close together and move further apart',
      'Show how to flick the wrist for spin',
      'Try trick catches',
      'Play frisbee golf with targets'
    ]
  },
  {
    id: 'rock-skipping',
    title: 'Stone Skipping',
    description: 'Skip flat stones across water',
    ageGroups: ['5-7', '8-10'],
    energy: 'medium',
    location: 'outdoor',
    prepTime: 2,
    duration: 20,
    suppliesNeeded: ['Flat stones'],
    tags: ['skill', 'nature', 'patience'],
    instructions: [
      'Find flat, smooth stones',
      'Show the sidearm throwing technique',
      'Count the number of skips',
      'Try to beat your personal best'
    ]
  },
  {
    id: 'den-building',
    title: 'Woodland Den Building',
    description: 'Build a shelter from sticks and branches',
    ageGroups: ['5-7', '8-10'],
    energy: 'medium',
    location: 'outdoor',
    prepTime: 5,
    duration: 45,
    suppliesNeeded: ['Sticks', 'Leaves'],
    tags: ['building', 'nature', 'teamwork'],
    instructions: [
      'Find a good base: tree trunk or fence',
      'Lean long sticks against it to form walls',
      'Cover gaps with leaves and smaller sticks',
      'Furnish with logs for seats'
    ]
  },
  {
    id: 'mini-golf',
    title: 'Garden Mini Golf',
    description: 'Set up a mini golf course in the garden',
    ageGroups: ['5-7', '8-10'],
    energy: 'medium',
    location: 'outdoor',
    prepTime: 15,
    duration: 30,
    suppliesNeeded: ['Golf clubs/sticks', 'Tennis ball', 'Cups/pots'],
    tags: ['sports', 'creative', 'competitive'],
    instructions: [
      'Dig cups into ground or use plant pots as holes',
      'Create obstacles with garden items',
      'Design 6-9 holes around the garden',
      'Keep score and award prizes'
    ]
  },

  // ===== OUTDOOR HIGH ENERGY =====
  {
    id: 'bike-ride',
    title: 'Family Bike Adventure',
    description: 'Explore neighbourhood on bikes',
    ageGroups: ['5-7', '8-10'],
    energy: 'high',
    location: 'outdoor',
    prepTime: 10,
    duration: 45,
    suppliesNeeded: ['Bikes', 'Helmets', 'Water'],
    tags: ['exercise', 'adventure', 'family'],
    instructions: [
      'Check bikes and helmets fit properly',
      'Choose safe route with minimal traffic',
      'Plan stops for water breaks',
      'Point out interesting sights along way'
    ]
  },
  {
    id: 'football-kickabout',
    title: 'Garden Football Fun',
    description: 'Kick ball around in garden or park',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'high',
    location: 'outdoor',
    prepTime: 2,
    duration: 30,
    suppliesNeeded: ['Football'],
    tags: ['sports', 'coordination', 'teamwork'],
    instructions: [
      'Use soft ball for younger children',
      'Set up goals with cones or jumpers',
      'Practice passing and shooting',
      'Play mini matches with simple rules'
    ]
  },
  {
    id: 'tag-games',
    title: 'Classic Tag Games',
    description: 'Running games of tag and variations',
    ageGroups: ['5-7', '8-10'],
    energy: 'high',
    location: 'outdoor',
    prepTime: 1,
    duration: 20,
    suppliesNeeded: [],
    tags: ['running', 'traditional', 'group'],
    instructions: [
      'Establish clear boundaries',
      'Start with simple tag',
      'Try variations: freeze tag, shadow tag',
      'Ensure everyone gets to be "it"'
    ]
  },
  {
    id: 'hide-seek',
    title: 'Ultimate Hide and Seek',
    description: 'Classic hiding game in garden or park',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'high',
    location: 'outdoor',
    prepTime: 1,
    duration: 25,
    suppliesNeeded: [],
    tags: ['traditional', 'excitement', 'strategy'],
    instructions: [
      'Set clear boundaries for hiding',
      'Choose good counting spot',
      'Help younger children find good spots',
      'Take turns being seeker'
    ]
  },
  {
    id: 'relay-races',
    title: 'Relay Race Challenge',
    description: 'Team relay races with fun variations',
    ageGroups: ['5-7', '8-10'],
    energy: 'high',
    location: 'outdoor',
    prepTime: 5,
    duration: 20,
    suppliesNeeded: ['Spoon', 'Egg/ball'],
    tags: ['running', 'teamwork', 'competitive'],
    instructions: [
      'Mark start and turn-around points',
      'Try egg-and-spoon race (use potato for less mess)',
      'Sack race with pillow cases',
      'Three-legged race with a partner'
    ]
  },
  {
    id: 'water-gun-battle',
    title: 'Water Gun Battle',
    description: 'Epic water gun fight on hot days',
    ageGroups: ['5-7', '8-10'],
    energy: 'high',
    location: 'outdoor',
    prepTime: 5,
    duration: 30,
    suppliesNeeded: ['Water guns', 'Water'],
    tags: ['summer', 'energy-burn', 'excitement'],
    season: 'summer',
    instructions: [
      'Fill all water guns',
      'Set boundaries for the battle zone',
      'Create bases and hiding spots',
      'Have refill stations ready'
    ]
  },
  {
    id: 'climbing-trees',
    title: 'Tree Climbing Adventure',
    description: 'Climb suitable trees with supervision',
    ageGroups: ['5-7', '8-10'],
    energy: 'high',
    location: 'outdoor',
    prepTime: 2,
    duration: 30,
    suppliesNeeded: [],
    tags: ['physical', 'confidence', 'nature'],
    instructions: [
      'Find a sturdy tree with low branches',
      'Check for dead branches first',
      'Supervise closely from below',
      'Set height limits appropriate to age'
    ]
  },
  {
    id: 'trampolining',
    title: 'Trampoline Fun',
    description: 'Bouncing and games on the trampoline',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'high',
    location: 'outdoor',
    prepTime: 1,
    duration: 20,
    suppliesNeeded: ['Trampoline'],
    tags: ['exercise', 'balance', 'fun'],
    instructions: [
      'Check trampoline is safe and net is secure',
      'One person at a time for safety',
      'Try different jumps: star, tuck, seat drop',
      'Play "crack the egg" sitting in the middle'
    ]
  },

  // ===== CREATIVE & ARTS =====
  {
    id: 'rock-painting',
    title: 'Painted Rock Garden',
    description: 'Paint smooth rocks with fun designs',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'either',
    prepTime: 5,
    duration: 45,
    suppliesNeeded: ['Smooth rocks', 'Paint', 'Brushes'],
    tags: ['creative', 'artistic', 'keepsake'],
    instructions: [
      'Choose smooth, flat rocks',
      'Wash and dry rocks first',
      'Start with simple designs',
      'Seal with clear coat when dry'
    ]
  },
  {
    id: 'paper-airplane',
    title: 'Paper Airplane Contest',
    description: 'Fold and fly different airplane designs',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'either',
    prepTime: 3,
    duration: 30,
    suppliesNeeded: ['Paper', 'Markers'],
    tags: ['STEM', 'engineering', 'competition'],
    instructions: [
      'Learn 2-3 different folding techniques',
      'Decorate planes with markers',
      'Test flights and adjust design',
      'Have distance and accuracy contests'
    ]
  },
  {
    id: 'collage-making',
    title: 'Magazine Collage Art',
    description: 'Create art from magazine cutouts',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 5,
    duration: 40,
    suppliesNeeded: ['Magazines', 'Scissors', 'Glue', 'Paper'],
    tags: ['creative', 'fine-motor', 'recycling'],
    instructions: [
      'Choose theme: animals, colours, shapes',
      'Cut out interesting pictures',
      'Arrange before gluing down',
      'Add drawn elements to complete'
    ]
  },
  {
    id: 'homemade-playdough',
    title: 'Make Your Own Playdough',
    description: 'Mix up a batch of homemade playdough',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 10,
    duration: 30,
    suppliesNeeded: ['Flour', 'Salt', 'Water', 'Food colouring', 'Oil'],
    tags: ['science', 'creative', 'cooking'],
    instructions: [
      'Mix 2 cups flour, 1 cup salt, 1 cup water, 1 tbsp oil',
      'Add food colouring for different colours',
      'Knead until smooth',
      'Store in airtight container'
    ]
  },
  {
    id: 'finger-painting',
    title: 'Messy Finger Painting',
    description: 'Get hands-on with paint and paper',
    ageGroups: ['2-4', '5-7'],
    energy: 'low',
    location: 'indoor',
    prepTime: 5,
    duration: 30,
    suppliesNeeded: ['Paint', 'Large paper', 'Aprons'],
    tags: ['creative', 'sensory', 'messy'],
    instructions: [
      'Cover surface with plastic sheet',
      'Wear old clothes or aprons',
      'Squirt paint colours on paper',
      'Create patterns, mix colours, have fun!'
    ]
  },
  {
    id: 'friendship-bracelets',
    title: 'Friendship Bracelet Making',
    description: 'Weave colourful friendship bracelets',
    ageGroups: ['8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 3,
    duration: 40,
    suppliesNeeded: ['Embroidery thread', 'Tape', 'Scissors'],
    tags: ['craft', 'patience', 'gifts'],
    instructions: [
      'Choose 3-4 colours of thread',
      'Tape threads to table top',
      'Learn basic knotting pattern',
      'Make extras to give as gifts'
    ]
  },
  {
    id: 'potato-printing',
    title: 'Potato Stamp Art',
    description: 'Carve shapes into potatoes and print',
    ageGroups: ['2-4', '5-7'],
    energy: 'low',
    location: 'indoor',
    prepTime: 10,
    duration: 25,
    suppliesNeeded: ['Potatoes', 'Paint', 'Paper', 'Knife (adult)'],
    tags: ['creative', 'printing', 'art'],
    instructions: [
      'Adult cuts potato in half',
      'Carve simple shape into flat surface',
      'Dip in paint and press onto paper',
      'Create patterns and wrapping paper'
    ]
  },
  {
    id: 'tie-dye',
    title: 'Tie-Dye T-Shirts',
    description: 'Create colourful tie-dye patterns on fabric',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'outdoor',
    prepTime: 10,
    duration: 45,
    suppliesNeeded: ['White t-shirts', 'Fabric dye', 'Rubber bands', 'Gloves'],
    tags: ['creative', 'fashion', 'colourful'],
    instructions: [
      'Twist and bind t-shirt with rubber bands',
      'Apply different colours to sections',
      'Wrap in plastic and leave overnight',
      'Rinse and reveal the pattern!'
    ]
  },

  // ===== SCIENCE & DISCOVERY =====
  {
    id: 'kitchen-science',
    title: 'Kitchen Science Experiments',
    description: 'Simple experiments with household items',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 10,
    duration: 30,
    suppliesNeeded: ['Baking soda', 'Vinegar', 'Food colouring'],
    tags: ['STEM', 'experiments', 'discovery'],
    instructions: [
      'Volcano: baking soda + vinegar reaction',
      'Colour mixing with food dye',
      'Floating and sinking tests',
      'Discuss what happens and why'
    ]
  },
  {
    id: 'magnifying-glass',
    title: 'Magnifying Glass Detective',
    description: 'Investigate tiny details with magnification',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'either',
    prepTime: 2,
    duration: 25,
    suppliesNeeded: ['Magnifying glass'],
    tags: ['science', 'observation', 'discovery'],
    instructions: [
      'Look at coins, leaves, fabric textures',
      'Examine insect details (safely)',
      'Compare how things look big vs small',
      'Draw what you see through the lens'
    ]
  },
  {
    id: 'growing-seeds',
    title: 'Plant a Seed',
    description: 'Plant seeds and watch them grow over days',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'either',
    prepTime: 10,
    duration: 20,
    suppliesNeeded: ['Seeds', 'Pot', 'Soil', 'Water'],
    tags: ['nature', 'patience', 'science'],
    instructions: [
      'Fill pot with soil and plant seed',
      'Water gently and place in sunny spot',
      'Check daily and water when dry',
      'Measure growth and keep a diary'
    ]
  },
  {
    id: 'bug-hotel',
    title: 'Build a Bug Hotel',
    description: 'Create a home for garden insects',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'outdoor',
    prepTime: 10,
    duration: 45,
    suppliesNeeded: ['Sticks', 'Pine cones', 'Old plant pot', 'Leaves'],
    tags: ['nature', 'building', 'science'],
    instructions: [
      'Find a sheltered spot in the garden',
      'Stack materials: sticks, pine cones, bark',
      'Pack tightly so bugs can shelter inside',
      'Check back regularly to see who moves in'
    ]
  },
  {
    id: 'rain-gauge',
    title: 'Make a Rain Gauge',
    description: 'Measure rainfall with a homemade gauge',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'either',
    prepTime: 10,
    duration: 20,
    suppliesNeeded: ['Plastic bottle', 'Ruler', 'Marker'],
    tags: ['science', 'weather', 'measuring'],
    instructions: [
      'Cut top off plastic bottle',
      'Mark measurements on the side with ruler',
      'Place outside in open area',
      'Check and record daily rainfall'
    ]
  },

  // ===== COOKING TOGETHER =====
  {
    id: 'cookie-decorating',
    title: 'Cookie Decorating Fun',
    description: 'Decorate plain biscuits with icing',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 10,
    duration: 30,
    suppliesNeeded: ['Plain biscuits', 'Icing', 'Sprinkles'],
    tags: ['cooking', 'creative', 'treats'],
    instructions: [
      'Lay out biscuits on clean surface',
      'Let children spread icing',
      'Add sprinkles and decorations',
      'Enjoy eating your creations!'
    ]
  },
  {
    id: 'sandwich-making',
    title: 'Creative Sandwich Art',
    description: 'Make fun shaped sandwiches',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 5,
    duration: 20,
    suppliesNeeded: ['Bread', 'Fillings', 'Cookie cutters'],
    tags: ['cooking', 'creative', 'practical'],
    instructions: [
      'Make sandwiches with favourite fillings',
      'Use cookie cutters for fun shapes',
      'Arrange creatively on plates',
      'Make faces with vegetables'
    ]
  },
  {
    id: 'pizza-making',
    title: 'Mini Pizza Chefs',
    description: 'Make personal pizzas with favourite toppings',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 10,
    duration: 30,
    suppliesNeeded: ['Pizza bases/wraps', 'Sauce', 'Cheese', 'Toppings'],
    tags: ['cooking', 'creative', 'dinner'],
    instructions: [
      'Give each child a mini base or wrap',
      'Spread sauce and sprinkle cheese',
      'Add favourite toppings',
      'Bake at 200C for 10-12 minutes'
    ]
  },
  {
    id: 'smoothie-making',
    title: 'Fruity Smoothie Bar',
    description: 'Blend healthy fruit smoothies together',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 5,
    duration: 15,
    suppliesNeeded: ['Blender', 'Fruit', 'Yoghurt', 'Milk'],
    tags: ['cooking', 'healthy', 'fun'],
    instructions: [
      'Let kids choose their fruits',
      'Add yoghurt and a splash of milk',
      'Adult operates the blender',
      'Pour and enjoy together'
    ]
  },
  {
    id: 'fairy-cakes',
    title: 'Fairy Cake Baking',
    description: 'Bake and decorate simple fairy cakes',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 15,
    duration: 45,
    suppliesNeeded: ['Flour', 'Sugar', 'Butter', 'Eggs', 'Cases'],
    tags: ['baking', 'creative', 'treats'],
    instructions: [
      'Weigh ingredients together',
      'Mix and pour into cases',
      'Bake at 180C for 15 minutes',
      'Decorate with icing when cool'
    ]
  },

  // ===== SEASONAL - WINTER =====
  {
    id: 'hot-chocolate',
    title: 'Hot Chocolate Making',
    description: 'Make warming drinks together',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 5,
    duration: 15,
    suppliesNeeded: ['Milk', 'Chocolate', 'Marshmallows'],
    tags: ['cooking', 'warming', 'treats'],
    season: 'winter',
    instructions: [
      'Heat milk safely (adult task)',
      'Let child add chocolate and stir',
      'Top with marshmallows or cream',
      'Enjoy while warm and cosy'
    ]
  },
  {
    id: 'snow-play',
    title: 'Snow Day Adventures',
    description: 'Build snowmen and have snow fun',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'high',
    location: 'outdoor',
    prepTime: 10,
    duration: 45,
    suppliesNeeded: ['Warm clothes', 'Gloves', 'Hat'],
    tags: ['seasonal', 'building', 'winter'],
    season: 'winter',
    instructions: [
      'Dress warmly with waterproof gloves',
      'Build snowmen or snow animals',
      'Make snow angels',
      'Warm up with hot drinks after'
    ]
  },
  {
    id: 'christmas-crafts',
    title: 'Christmas Decoration Making',
    description: 'Make homemade Christmas decorations',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 10,
    duration: 45,
    suppliesNeeded: ['Card', 'Glitter', 'Glue', 'Ribbon'],
    tags: ['seasonal', 'creative', 'festive'],
    season: 'winter',
    instructions: [
      'Cut out star and tree shapes from card',
      'Decorate with glitter, sequins, and paint',
      'Add ribbon for hanging',
      'Hang on tree or around the house'
    ]
  },

  // ===== SEASONAL - SUMMER =====
  {
    id: 'ice-cream',
    title: 'Homemade Ice Cream',
    description: 'Make ice cream in a bag',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 10,
    duration: 20,
    suppliesNeeded: ['Cream', 'Sugar', 'Ice', 'Salt', 'Bags'],
    tags: ['science', 'cooking', 'treats'],
    season: 'summer',
    instructions: [
      'Mix cream and sugar in small bag',
      'Place in larger bag with ice and salt',
      'Shake vigorously for 10-15 minutes',
      'Enjoy homemade ice cream!'
    ]
  },
  {
    id: 'sprinkler-run',
    title: 'Sprinkler Running Fun',
    description: 'Run through garden sprinklers',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'high',
    location: 'outdoor',
    prepTime: 3,
    duration: 20,
    suppliesNeeded: ['Sprinkler', 'Swimwear'],
    tags: ['cooling', 'running', 'summer'],
    season: 'summer',
    instructions: [
      'Set up sprinkler in safe area',
      'Change into swimwear',
      'Run, jump, and dance through water',
      'Have towels ready for afterwards'
    ]
  },
  {
    id: 'ice-painting',
    title: 'Ice Cube Painting',
    description: 'Paint with frozen paint cubes',
    ageGroups: ['2-4', '5-7'],
    energy: 'low',
    location: 'outdoor',
    prepTime: 5,
    duration: 20,
    suppliesNeeded: ['Ice cube tray', 'Paint', 'Paper'],
    tags: ['creative', 'sensory', 'summer'],
    season: 'summer',
    instructions: [
      'Freeze watered-down paint in ice cube trays (night before)',
      'Pop out frozen cubes',
      'Slide them across paper to create art',
      'Watch colours blend as ice melts'
    ]
  },

  // ===== SEASONAL - AUTUMN =====
  {
    id: 'leaf-collecting',
    title: 'Autumn Leaf Collection',
    description: 'Collect and press colourful autumn leaves',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'outdoor',
    prepTime: 3,
    duration: 30,
    suppliesNeeded: ['Bag', 'Heavy book'],
    tags: ['nature', 'collecting', 'seasonal'],
    season: 'autumn',
    instructions: [
      'Walk and collect leaves of different colours',
      'Discuss why leaves change colour',
      'Press between book pages to dry',
      'Use for art projects later'
    ]
  },
  {
    id: 'conker-crafts',
    title: 'Conker Creatures',
    description: 'Make animals and characters from conkers',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 5,
    duration: 30,
    suppliesNeeded: ['Conkers', 'Toothpicks', 'Googly eyes', 'Glue'],
    tags: ['creative', 'nature', 'autumn'],
    season: 'autumn',
    instructions: [
      'Collect conkers from the park',
      'Use toothpicks to connect conkers (adult help)',
      'Add googly eyes and pipe cleaner legs',
      'Create a whole conker family'
    ]
  },

  // ===== RAINY DAY SPECIALS =====
  {
    id: 'window-art',
    title: 'Rainy Window Art',
    description: 'Draw on steamed windows',
    ageGroups: ['2-4', '5-7'],
    energy: 'low',
    location: 'indoor',
    prepTime: 1,
    duration: 15,
    suppliesNeeded: [],
    tags: ['creative', 'rainy-day', 'temporary'],
    instructions: [
      'Wait for windows to steam up naturally',
      'Draw pictures with fingers',
      'Practice letters and numbers',
      'Wipe clean when finished'
    ]
  },
  {
    id: 'indoor-picnic',
    title: 'Living Room Picnic',
    description: 'Have a picnic on the living room floor',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 10,
    duration: 30,
    suppliesNeeded: ['Blanket', 'Finger foods', 'Drinks'],
    tags: ['special', 'food', 'cosy'],
    instructions: [
      'Lay blanket on floor',
      'Prepare simple finger foods',
      'Eat sitting on the blanket',
      'Maybe play quiet games after'
    ]
  },
  {
    id: 'movie-afternoon',
    title: 'Rainy Day Cinema',
    description: 'Set up a cosy home cinema experience',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 10,
    duration: 90,
    suppliesNeeded: ['Popcorn', 'Blankets', 'Drinks'],
    tags: ['relaxing', 'special', 'rainy-day'],
    instructions: [
      'Draw curtains and dim lights',
      'Set up blanket nest on sofa',
      'Make popcorn and get drinks ready',
      'Pick a family film to enjoy together'
    ]
  },

  // ===== EDUCATIONAL FUN =====
  {
    id: 'number-games',
    title: 'Number Hunt Games',
    description: 'Find and count numbers around the house',
    ageGroups: ['2-4', '5-7'],
    energy: 'low',
    location: 'indoor',
    prepTime: 2,
    duration: 20,
    suppliesNeeded: ['Paper', 'Pen'],
    tags: ['educational', 'maths', 'observation'],
    instructions: [
      'Hunt for numbers on clocks, books, etc.',
      'Count household items',
      'Practice writing numbers found',
      'Make it a game with prizes'
    ]
  },
  {
    id: 'alphabet-game',
    title: 'Alphabet Treasure Hunt',
    description: 'Find items starting with each letter',
    ageGroups: ['5-7', '8-10'],
    energy: 'medium',
    location: 'indoor',
    prepTime: 2,
    duration: 25,
    suppliesNeeded: ['Notebook'],
    tags: ['educational', 'literacy', 'challenge'],
    instructions: [
      'Go through alphabet A-Z',
      'Find object starting with each letter',
      'Write down or draw what you find',
      'See who can complete alphabet first'
    ]
  },
  {
    id: 'map-drawing',
    title: 'Draw a Treasure Map',
    description: 'Create a map of your house or garden',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 3,
    duration: 30,
    suppliesNeeded: ['Large paper', 'Crayons', 'Tea (for aging effect)'],
    tags: ['creative', 'geography', 'imaginative'],
    instructions: [
      'Draw a birds-eye view of your home or garden',
      'Add landmarks, compass rose, and labels',
      'Age the paper with cold tea stains',
      'Mark an X where treasure is hidden'
    ]
  },
  {
    id: 'word-games',
    title: 'Word Game Challenge',
    description: 'Play spoken word games together',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'either',
    prepTime: 0,
    duration: 20,
    suppliesNeeded: [],
    tags: ['educational', 'language', 'social'],
    instructions: [
      'Try "I Spy" for younger kids',
      '20 Questions: think of something, answer yes/no',
      'Word chain: next word starts with last letter',
      'Rhyming challenge: who can find the most rhymes?'
    ]
  },

  // ===== MUSIC & MOVEMENT =====
  {
    id: 'singing-session',
    title: 'Family Karaoke Time',
    description: 'Sing favourite songs together',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'medium',
    location: 'indoor',
    prepTime: 2,
    duration: 20,
    suppliesNeeded: ['Music player'],
    tags: ['music', 'performance', 'confidence'],
    instructions: [
      'Choose family favourite songs',
      'Take turns being lead singer',
      'Use wooden spoons as microphones',
      'Record performances for fun'
    ]
  },
  {
    id: 'instrument-making',
    title: 'DIY Musical Instruments',
    description: 'Make instruments from household items',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 15,
    duration: 45,
    suppliesNeeded: ['Empty containers', 'Rice', 'Rubber bands'],
    tags: ['creative', 'music', 'recycling'],
    instructions: [
      'Shakers: rice in sealed containers',
      'Drums: containers with stretched fabric',
      'String instruments: rubber bands on boxes',
      'Form a family band!'
    ]
  },
  {
    id: 'dance-party',
    title: 'Living Room Dance Party',
    description: 'Blast music and dance like nobody is watching',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'high',
    location: 'indoor',
    prepTime: 1,
    duration: 20,
    suppliesNeeded: ['Speaker'],
    tags: ['music', 'exercise', 'energy-burn'],
    instructions: [
      'Create a playlist of upbeat songs',
      'Clear space in the living room',
      'Take turns showing off dance moves',
      'Try copying each other\'s moves'
    ]
  },

  // ===== SENSORY PLAY (TODDLER FOCUSED) =====
  {
    id: 'sensory-bin',
    title: 'Sensory Bin Exploration',
    description: 'Explore textures with a sensory tub',
    ageGroups: ['2-4'],
    energy: 'low',
    location: 'indoor',
    prepTime: 10,
    duration: 30,
    suppliesNeeded: ['Large tub', 'Rice/pasta', 'Small toys', 'Scoops'],
    tags: ['sensory', 'discovery', 'fine-motor'],
    instructions: [
      'Fill tub with dry rice or pasta',
      'Hide small toys inside',
      'Add scoops, cups, and funnels',
      'Let children dig and explore'
    ]
  },
  {
    id: 'water-table',
    title: 'Water Table Play',
    description: 'Pouring, splashing, and water experiments',
    ageGroups: ['2-4', '5-7'],
    energy: 'low',
    location: 'either',
    prepTime: 5,
    duration: 30,
    suppliesNeeded: ['Tub of water', 'Cups', 'Funnels', 'Toys'],
    tags: ['sensory', 'science', 'messy'],
    instructions: [
      'Fill tub with warm water',
      'Add cups, funnels, and water toys',
      'Practice pouring between containers',
      'Test which objects float or sink'
    ]
  },
  {
    id: 'texture-walk',
    title: 'Texture Trail',
    description: 'Walk barefoot on different textures',
    ageGroups: ['2-4'],
    energy: 'low',
    location: 'indoor',
    prepTime: 10,
    duration: 15,
    suppliesNeeded: ['Bubble wrap', 'Towel', 'Tin foil', 'Mat'],
    tags: ['sensory', 'discovery', 'tactile'],
    instructions: [
      'Lay different textures on the floor in a trail',
      'Bubble wrap, soft towel, tin foil, rough mat',
      'Walk barefoot along the trail',
      'Describe how each one feels'
    ]
  },

  // ===== MISCELLANEOUS =====
  {
    id: 'photo-shoot',
    title: 'Family Photo Shoot',
    description: 'Take silly and creative photos together',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'medium',
    location: 'either',
    prepTime: 5,
    duration: 20,
    suppliesNeeded: ['Phone/camera', 'Props'],
    tags: ['creative', 'family', 'memories'],
    instructions: [
      'Gather fun props: hats, glasses, scarves',
      'Find good lighting spots',
      'Take silly posed photos',
      'Try jumping shots and action shots'
    ]
  },
  {
    id: 'treasure-box',
    title: 'Decorate a Treasure Box',
    description: 'Create a special box for keeping treasures',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 5,
    duration: 35,
    suppliesNeeded: ['Shoebox', 'Paint', 'Stickers', 'Glue'],
    tags: ['creative', 'personal', 'keepsake'],
    instructions: [
      'Find an empty shoebox',
      'Paint and decorate the outside',
      'Add gems, stickers, or cut-out shapes',
      'Fill with special treasures'
    ]
  },
  {
    id: 'time-capsule',
    title: 'Family Time Capsule',
    description: 'Create a time capsule to open in the future',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 10,
    duration: 30,
    suppliesNeeded: ['Container', 'Paper', 'Small items'],
    tags: ['memory', 'thoughtful', 'special'],
    instructions: [
      'Find a waterproof container',
      'Write letters to your future self',
      'Add drawings, photos, and small items',
      'Seal and label with an opening date'
    ]
  },
  {
    id: 'bedroom-tidy',
    title: 'Room Tidy Race',
    description: 'Turn tidying up into a fun game',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'medium',
    location: 'indoor',
    prepTime: 0,
    duration: 15,
    suppliesNeeded: [],
    tags: ['practical', 'responsibility', 'fun'],
    instructions: [
      'Set a timer for 10 minutes',
      'Race to put everything in its place',
      'Play upbeat music while tidying',
      'Celebrate the tidy room together'
    ]
  },
  {
    id: 'car-wash',
    title: 'Toy Car Wash',
    description: 'Wash toy cars, bikes, or scooters outside',
    ageGroups: ['2-4', '5-7'],
    energy: 'medium',
    location: 'outdoor',
    prepTime: 5,
    duration: 25,
    suppliesNeeded: ['Sponge', 'Bucket', 'Soap', 'Water'],
    tags: ['water', 'practical', 'fun'],
    instructions: [
      'Fill bucket with warm soapy water',
      'Bring out toys that need washing',
      'Scrub, rinse, and dry',
      'Line them up to dry in the sun'
    ]
  },
  {
    id: 'stargazing',
    title: 'Stargazing Night',
    description: 'Look at stars and learn constellations',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'outdoor',
    prepTime: 5,
    duration: 30,
    suppliesNeeded: ['Blanket', 'Star map or app'],
    tags: ['science', 'nature', 'evening'],
    instructions: [
      'Wait for a clear night',
      'Lay out blankets in the garden',
      'Use a star map app to identify constellations',
      'Look for the Moon, planets, and shooting stars'
    ]
  },
  {
    id: 'magic-tricks',
    title: 'Learn Magic Tricks',
    description: 'Simple magic tricks to amaze the family',
    ageGroups: ['5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 5,
    duration: 30,
    suppliesNeeded: ['Cards', 'Coins', 'Cups'],
    tags: ['performance', 'skill', 'confidence'],
    instructions: [
      'Learn a simple card trick or coin trick',
      'Practice until smooth',
      'Add dramatic flair and patter',
      'Perform a magic show for the family'
    ]
  },
  {
    id: 'garden-art',
    title: 'Nature Art Installation',
    description: 'Create art using natural materials found outside',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'outdoor',
    prepTime: 5,
    duration: 30,
    suppliesNeeded: [],
    tags: ['creative', 'nature', 'art'],
    instructions: [
      'Collect sticks, leaves, flowers, and stones',
      'Arrange them into patterns or pictures on the ground',
      'Try a spiral, a face, or an animal shape',
      'Take a photo from above to capture it'
    ]
  },
];

export { type Activity };
