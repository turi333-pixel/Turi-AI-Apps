
import { AppEntry, Category } from './types';

export const APP_LIST: AppEntry[] = [
  {
    id: 'transcribe',
    category: 'Productivity',
    tags: ['Audio', 'AI', 'Summary'],
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2070&auto=format&fit=crop',
    launchUrl: 'https://voxscribe-ai-442393916614.us-west1.run.app',
    featured: true,
    translations: {
      en: {
        name: 'Transcribe',
        subtitle: 'Turn conversations into clarity.',
        description: 'Upload or record audio and get an accurate transcription, a concise summary, and a clear list of action items.',
        longDescription: 'Ideal for meetings, interviews, and voice notes when you want to capture decisions and next steps without re-listening to the entire recording. Powered by advanced speech-to-text intelligence to ensure every word is captured with context.'
      },
      es: {
        name: 'Transcribir',
        subtitle: 'Convierte conversaciones en claridad.',
        description: 'Sube o graba audio y obtén una transcripción precisa, un resumen conciso y una lista clara de tareas.',
        longDescription: 'Ideal para reuniones, entrevistas y notas de voz cuando quieres capturar decisiones y próximos pasos sin volver a escuchar toda la grabación. Impulsado por inteligencia avanzada de voz a texto.'
      },
      de: {
        name: 'Transkribieren',
        subtitle: 'Gespräche in Klarheit verwandeln.',
        description: 'Audio hochladen oder aufnehmen und eine präzise Transkription, eine kurze Zusammenfassung und Aktionspunkte erhalten.',
        longDescription: 'Ideal für Meetings, Interviews und Sprachnotizen, wenn Sie Entscheidungen und nächste Schritte festhalten möchten, ohne die gesamte Aufnahme erneut anzuhören.'
      }
    }
  },
  {
    id: 'voguefit',
    category: 'Lifestyle',
    tags: ['Fashion', 'AR', 'Visual'],
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop',
    launchUrl: 'https://voguefit-ai-virtual-try-on-442393916614.us-west1.run.app',
    translations: {
      en: {
        name: 'VogueFit AI',
        subtitle: 'See how clothes look on you before you buy.',
        description: 'Try on clothes virtually using your own photo and get a realistic preview of fit and style.',
        longDescription: 'A simple way to explore outfits, reduce uncertainty, and make more confident fashion choices. Use our neural fitting technology to visualize textures and drapes on your unique body shape.'
      },
      es: {
        name: 'VogueFit AI',
        subtitle: 'Mira cómo te queda la ropa antes de comprar.',
        description: 'Pruébate ropa virtualmente usando tu propia foto y obtén una vista previa realista del ajuste y estilo.',
        longDescription: 'Una forma sencilla de explorar atuendos, reducir la incertidumbre y tomar decisiones de moda con más confianza.'
      },
      de: {
        name: 'VogueFit AI',
        subtitle: 'Sehen Sie vor dem Kauf, wie Kleidung an Ihnen aussieht.',
        description: 'Probieren Sie Kleidung virtuell mit Ihrem eigenen Foto an und erhalten Sie eine realistische Vorschau.',
        longDescription: 'Ein einfacher Weg, Outfits zu erkunden, Unsicherheiten zu reduzieren und selbstbewusstere Modeentscheidungen zu treffen.'
      }
    }
  },
  {
    id: 'moodflow',
    category: 'Health & Wellness',
    tags: ['Wellness', 'Journal', 'Insights'],
    imageUrl: 'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=2070&auto=format&fit=crop',
    launchUrl: 'https://moodflow-442393916614.us-west1.run.app',
    translations: {
      en: {
        name: 'MoodFlow',
        subtitle: 'Track your mood. Understand your patterns.',
        description: 'Log your mood and mental state through the day and get a clear weekly overview of how you’re doing.',
        longDescription: 'MoodFlow offers simple tips and reflections to help you improve emotional balance over time. It visualizes your mental health journey with beautiful, calming charts and actionable wellness insights.'
      },
      es: {
        name: 'MoodFlow',
        subtitle: 'Registra tu estado de ánimo. Comprende tus patrones.',
        description: 'Registra tu estado de ánimo y estado mental durante el día y obtén una visión semanal clara.',
        longDescription: 'MoodFlow ofrece consejos simples y reflexiones para ayudarte a mejorar el equilibrio emocional con el tiempo.'
      },
      de: {
        name: 'MoodFlow',
        subtitle: 'Stimmung verfolgen. Muster verstehen.',
        description: 'Protokollieren Sie Ihre Stimmung über den Tag und erhalten Sie einen klaren Wochenüberblick.',
        longDescription: 'MoodFlow bietet einfache Tipps und Reflexionen, um Ihr emotionales Gleichgewicht im Laufe der Zeit zu verbessern.'
      }
    }
  },
  {
    id: 'beersnap',
    category: 'Lifestyle',
    tags: ['Food & Drink', 'Scanner', 'Discovery'],
    imageUrl: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=2070&auto=format&fit=crop',
    launchUrl: 'https://beersnap-442393916614.us-west1.run.app',
    translations: {
      en: {
        name: 'BeerSnap',
        subtitle: 'Know your beer — and matches your taste.',
        description: 'Take a photo or upload an image of a beer and get detailed information about style and flavor.',
        longDescription: 'BeerSnap checks how well a beer matches your personal preferences, helping you discover drinks you’ll actually enjoy. It analyzes bottle labels or pours to identify IBUs, ABV, and pairing suggestions.'
      },
      es: {
        name: 'BeerSnap',
        subtitle: 'Conoce tu cerveza y descubre si va con tu gusto.',
        description: 'Toma una foto de una cerveza y obtén información detallada sobre su estilo y sabor.',
        longDescription: 'BeerSnap verifica qué tan bien coincide una cerveza con tus preferencias personales, ayudándote a descubrir bebidas que realmente disfrutarás.'
      },
      de: {
        name: 'BeerSnap',
        subtitle: 'Kennen Sie Ihr Bier — passend zu Ihrem Geschmack.',
        description: 'Machen Sie ein Foto von einem Bier und erhalten Sie detaillierte Informationen über Stil und Geschmack.',
        longDescription: 'BeerSnap prüft, wie gut ein Bier zu Ihren persönlichen Vorlieben passt, und hilft Ihnen, Getränke zu entdecken, die Ihnen wirklich schmecken.'
      }
    }
  },
  {
    id: 'motoscan',
    category: 'Utilities',
    tags: ['Maintenance', 'Safety', 'Vision'],
    imageUrl: 'https://images.unsplash.com/photo-1558389186-438424b00a32?q=80&w=2070&auto=format&fit=crop',
    launchUrl: 'https://motoscan-ai-pro-mechanic-assistant-442393916614.us-west1.run.app',
    translations: {
      en: {
        name: 'MotoScan AI',
        subtitle: 'A quick health check for your motorcycle.',
        description: 'Take a photo of any part of your motorbike and get an instant assessment of its condition.',
        longDescription: 'Designed as a first line of awareness, not a replacement for a mechanic. MotoScan identifies wear patterns, leaks, and potential mechanical issues using computer vision trained on thousands of bike models.'
      },
      es: {
        name: 'MotoScan AI',
        subtitle: 'Un chequeo rápido para tu motocicleta.',
        description: 'Toma una foto de cualquier parte de tu moto y obtén una evaluación instantánea de su estado.',
        longDescription: 'Diseñado como una primera línea de conciencia, no como un reemplazo de un mecánico. MotoScan identifica patrones de desgaste y fugas.'
      },
      de: {
        name: 'MotoScan AI',
        subtitle: 'Ein schneller Gesundheitscheck für Ihr Motorrad.',
        description: 'Machen Sie ein Foto eines Motorradteils und erhalten Sie eine sofortige Zustandsbewertung.',
        longDescription: 'Als erste Orientierungshilfe gedacht, nicht als Ersatz für einen Mechaniker. MotoScan erkennt Verschleißmuster und Lecks.'
      }
    }
  },
  {
    id: 'tabify',
    category: 'Creative',
    tags: ['Guitar', 'Creative', 'Education'],
    imageUrl: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop',
    launchUrl: 'https://tabify-ai-442393916614.us-west1.run.app',
    translations: {
      en: {
        name: 'Tabify AI',
        subtitle: 'Turn music into guitar tabs.',
        description: 'Upload a song and get a playable guitar tablature automatically generated for you.',
        longDescription: 'Useful for learning new tracks, practising riffs, or quickly understanding how a piece of music is structured on the guitar. Our algorithm separates tracks to isolate the guitar parts for higher accuracy.'
      },
      es: {
        name: 'Tabify AI',
        subtitle: 'Convierte música en tablaturas de guitarra.',
        description: 'Sube una canción y obtén una tablatura de guitarra reproducible generada automáticamente.',
        longDescription: 'Útil para aprender nuevas pistas, practicar riffs o entender rápidamente la estructura de una pieza musical en la guitarra.'
      },
      de: {
        name: 'Tabify AI',
        subtitle: 'Musik in Gitarren-Tabs verwandeln.',
        description: 'Laden Sie einen Song hoch und erhalten Sie automatisch generierte Gitarren-Tabs.',
        longDescription: 'Nützlich zum Erlernen neuer Tracks, zum Üben von Riffs oder zum schnellen Verständnis der Struktur eines Musikstücks auf der Gitarre.'
      }
    }
  },
  {
    id: 'mi-huerto',
    category: 'Lifestyle',
    tags: ['Gardening', 'Urban', 'Nature'],
    imageUrl: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=2070&auto=format&fit=crop',
    launchUrl: 'https://mi-huerto-tu-experto-personal-en-jardiner-a-442393916614.us-west1.run.app',
    translations: {
      en: {
        name: 'Mi Huerto',
        subtitle: 'Your personal assistant for urban gardening.',
        description: 'Designed for small gardens, balconies, and pots. Help you care for plants and herbs.',
        longDescription: 'Mi Huerto provides practical guidance on watering, sunlight, and seasonal needs — ideal for city living. Keep track of your urban oasis with a digital twin of your balcony garden.'
      },
      es: {
        name: 'Mi Huerto',
        subtitle: 'Tu asistente personal para jardinería urbana.',
        description: 'Diseñado para jardines pequeños, balcones y macetas. Te ayuda a cuidar tus plantas.',
        longDescription: 'Mi Huerto proporciona orientación práctica sobre riego, luz solar y necesidades estacionales.'
      },
      de: {
        name: 'Mi Huerto',
        subtitle: 'Ihr persönlicher Assistent für Urban Gardening.',
        description: 'Entwickelt für kleine Gärten, Balkone und Töpfe. Hilft Ihnen bei der Pflege von Pflanzen.',
        longDescription: 'Mi Huerto bietet praktische Anleitungen zu Bewässerung, Sonnenlicht und saisonalen Bedürfnissen.'
      }
    }
  },
  {
    id: 'tiempo-moto',
    category: 'Utilities',
    tags: ['Weather', 'Planning', 'Safety'],
    imageUrl: 'https://images.unsplash.com/photo-1614165933388-9b552e8b0b74?q=80&w=2070&auto=format&fit=crop',
    launchUrl: 'https://tiempo-moto-european-winter-rider-companion-442393916614.us-west1.run.app',
    translations: {
      en: {
        name: 'Tiempo Moto',
        subtitle: 'Decide if it’s a good day to ride.',
        description: 'Analyze weather conditions like rain, ice, and heat to decide if it’s safe to go out.',
        longDescription: 'Analyse weather conditions such as temperature, humidity, rain, ice, and heat to help you decide whether it’s safe and comfortable to go out on your motorbike — especially useful in changing or winter conditions.'
      },
      es: {
        name: 'Tiempo Moto',
        subtitle: 'Decide si es un buen día para rodar.',
        description: 'Analiza condiciones climáticas como lluvia, hielo y calor para decidir si es seguro salir.',
        longDescription: 'Analiza condiciones climáticas como temperatura, humedad, lluvia y hielo para ayudarte a decidir si es seguro y cómodo salir en moto.'
      },
      de: {
        name: 'Tiempo Moto',
        subtitle: 'Entscheiden Sie, ob es ein guter Tag zum Fahren ist.',
        description: 'Analysieren Sie Wetterbedingungen wie Regen, Eis und Hitze, um die Sicherheit zu prüfen.',
        longDescription: 'Analysieren Sie Wetterbedingungen wie Temperatur, Luftfeuchtigkeit, Regen und Eis, um zu entscheiden, ob es sicher und bequem ist, mit dem Motorrad rauszufahren.'
      }
    }
  },
  {
    id: 'anchor',
    category: 'Productivity',
    tags: ['Mindfulness', 'Ideation', 'AI Chat'],
    imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2070&auto=format&fit=crop',
    launchUrl: 'https://anchor-442393916614.us-west1.run.app/',
    translations: {
      en: {
        name: 'Anchor',
        subtitle: 'A calm space to think things through.',
        description: 'A conversational companion for ideation and reflection. Talk through ideas or doubts.',
        longDescription: 'Anchor is a conversational companion for ideation and reflection. Talk through ideas, doubts, or decisions with a neutral, attentive listener that helps you structure thoughts and move forward.'
      },
      es: {
        name: 'Anchor',
        subtitle: 'Un espacio tranquilo para reflexionar.',
        description: 'Un compañero conversacional para la ideación y la reflexión. Habla sobre ideas o dudas.',
        longDescription: 'Anchor es un compañero conversacional para la ideación y la reflexión. Habla sobre tus dudas con un oyente neutral.'
      },
      de: {
        name: 'Anchor',
        subtitle: 'Ein ruhiger Ort, um Dinge durchzudenken.',
        description: 'Ein Gesprächsbegleiter für Ideenfindung und Reflexion. Sprechen Sie über Ideen oder Zweifel.',
        longDescription: 'Anchor ist ein Gesprächsbegleiter für Ideenfindung und Reflexion. Sprechen Sie über Ideen, Zweifel oder Entscheidungen mit einem neutralen Zuhörer.'
      }
    }
  },
  {
    id: 'claro',
    category: 'Productivity',
    tags: ['Logic', 'Decision Making', 'Framework'],
    imageUrl: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=2070&auto=format&fit=crop',
    launchUrl: 'https://clar-decision-companion-442393916614.us-west1.run.app/',
    translations: {
      en: {
        name: 'CLARØ.',
        subtitle: 'Make decisions with clarity.',
        description: 'Guides you through structured thinking to help you make complex decisions clearly.',
        longDescription: 'CLARØ guides you through structured thinking to help you make complex decisions more clearly. It helps break down options, trade-offs, and priorities so you can move forward with confidence.'
      },
      es: {
        name: 'CLARØ.',
        subtitle: 'Toma decisiones con claridad.',
        description: 'Te guía a través de un pensamiento estructurado para ayudarte a tomar decisiones complejas.',
        longDescription: 'CLARØ te guía a través de un pensamiento estructurado para ayudarte a tomar decisiones complejas de manera más clara.'
      },
      de: {
        name: 'CLARØ.',
        subtitle: 'Entscheidungen mit Klarheit treffen.',
        description: 'Führt Sie durch strukturiertes Denken, um komplexe Entscheidungen klarer zu treffen.',
        longDescription: 'CLARØ führt Sie durch strukturiertes Denken, um komplexe Entscheidungen klarer zu treffen. Es hilft beim Abwägen von Optionen.'
      }
    }
  }
];

export const CATEGORIES: Category[] = [
  'All', 'Productivity', 'Lifestyle', 'Health & Wellness', 'Utilities', 'Creative'
];
