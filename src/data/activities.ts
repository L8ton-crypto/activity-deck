import { Activity } from '@/types';

export const activities: Activity[] = [
  // Indoor Low Energy Activities
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
    description: 'Cozy reading session with favourite books',
    ageGroups: ['2-4', '5-7', '8-10'],
    energy: 'low',
    location: 'indoor',
    prepTime: 1,
    duration: 20,
    suppliesNeeded: ['Books'],
    tags: ['reading', 'imagination', 'bonding'],
    instructions: [
      'Create a cozy reading nook',
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

  // Indoor Medium Energy Activities
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

  // Indoor High Energy Activities
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
    tags: ['building', 'imaginative', 'cozy'],
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
      'Have camping snacks like s\'mores'
    ]
  },

  // Outdoor Low Energy Activities
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

  // Outdoor Medium Energy Activities
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

  // Outdoor High Energy Activities
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

  // Creative & Arts Activities
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

  // Science & Discovery
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

  // Winter/Indoor Seasonal
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
      'Enjoy while warm and cozy'
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

  // Summer Specials
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

  // Rainy Day Specials
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
    tags: ['special', 'food', 'cozy'],
    instructions: [
      'Lay blanket on floor',
      'Prepare simple finger foods',
      'Eat sitting on the blanket',
      'Maybe play quiet games after'
    ]
  },

  // Educational Fun
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
    tags: ['educational', 'math', 'observation'],
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

  // Music & Movement
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

  // Cooking Together
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
  }
];

export { type Activity };