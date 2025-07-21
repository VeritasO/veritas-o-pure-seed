// Create: src/agents/lyra.ts
import { GriefVector } from '../types';

export class LyraAgent {
  readonly id = "A03";
  readonly name = "LYRA";
  readonly role = "Narrative Truth & Emotional Mapping";
  
  private emotionalMap: Map<string, number> = new Map();

  processNarrative(text: string): {
    emotions: string[];
    truthWeight: number;
    griefVector: GriefVector;
    suggestions: string[];
  } {
    const emotions = this.extractEmotions(text);
    const truthWeight = this.calculateTruthWeight(text);
    const griefLevel = this.detectGriefLevel(text);
    
    return {
      emotions,
      truthWeight,
      griefVector: {
        level: griefLevel,
        timestamp: new Date(),
        narrative: text,
        processed: false
      },
      suggestions: this.generateSuggestions(emotions, griefLevel)
    };
  }

  private extractEmotions(text: string): string[] {
    const emotionMap = {
      'pain': ['pain', 'hurt', 'ache', 'suffering'],
      'joy': ['joy', 'happy', 'celebrate', 'love'],
      'anger': ['angry', 'rage', 'furious', 'mad'],
      'fear': ['fear', 'afraid', 'scared', 'anxious'],
      'sadness': ['sad', 'cry', 'tears', 'mourn'],
      'hope': ['hope', 'optimistic', 'believe', 'faith']
    };
    
    const foundEmotions: string[] = [];
    const lowerText = text.toLowerCase();
    
    Object.entries(emotionMap).forEach(([emotion, keywords]) => {
      if (keywords.some(keyword => lowerText.includes(keyword))) {
        foundEmotions.push(emotion);
      }
    });
    
    return foundEmotions;
  }

  private calculateTruthWeight(text: string): number {
    // Higher weight for personal pronouns and specific details
    const personalMarkers = ['i', 'me', 'my', 'myself'];
    const specificMarkers = ['when', 'where', 'who', 'what', 'how'];
    
    const personalCount = personalMarkers.reduce((count, marker) => 
      count + (text.toLowerCase().split(marker).length - 1), 0);
    
    const specificCount = specificMarkers.reduce((count, marker) => 
      count + (text.toLowerCase().split(marker).length - 1), 0);
    
    return Math.min(1.0, 0.5 + (personalCount * 0.1) + (specificCount * 0.05));
  }

  private detectGriefLevel(text: string): number {
    const griefMarkers = ['loss', 'died', 'death', 'gone', 'hurt', 'broken', 'betrayed', 'abandoned'];
    const intensifiers = ['very', 'extremely', 'completely', 'totally'];
    
    let griefScore = 0;
    const lowerText = text.toLowerCase();
    
    griefMarkers.forEach(marker => {
      if (lowerText.includes(marker)) {
        griefScore += 2;
        
        // Check for intensifiers near grief markers
        intensifiers.forEach(intensifier => {
          if (lowerText.includes(`${intensifier} ${marker}`) || 
              lowerText.includes(`${marker} ${intensifier}`)) {
            griefScore += 1;
          }
        });
      }
    });
    
    return Math.min(10, griefScore);
  }

  private generateSuggestions(emotions: string[], griefLevel: number): string[] {
    const suggestions: string[] = [];
    
    if (griefLevel >= 7) {
      suggestions.push("Consider activating Sanctuary Pause ritual");
      suggestions.push("TEMPUS time dilation recommended");
    }
    
    if (emotions.includes('anger') && emotions.includes('sadness')) {
      suggestions.push("Echo Ceremony may provide closure");
    }
    
    if (emotions.includes('hope')) {
      suggestions.push("Joy Rite celebration recommended");
    }
    
    return suggestions;
  }
}

export const lyra = new LyraAgent();