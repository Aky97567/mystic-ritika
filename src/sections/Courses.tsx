import styled from "@emotion/styled";
import { theme } from "../theme";
import { breakpoints } from "../theme/breakpoints";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import type { Course } from "../data/types";

const CoursesContainer = styled.section`
  position: relative;
  z-index: 10;
  padding: ${theme.spacing[20]} ${theme.spacing[6]};
  background: rgba(0, 0, 0, 0.2);
`;

const CoursesContent = styled.div`
  max-width: 96rem;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize["4xl"]};
  font-weight: ${theme.typography.fontWeight.bold};
  text-align: center;
  margin-bottom: ${theme.spacing[16]};
  background: linear-gradient(
    to right,
    ${theme.colors.primary[400]},
    ${theme.colors.secondary[400]}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing[8]};

  ${breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CourseCard = styled(Card)`
  padding: ${theme.spacing[8]};
`;

const CourseTitle = styled.h3`
  font-size: ${theme.typography.fontSize["2xl"]};
  font-weight: ${theme.typography.fontWeight.semibold};
  margin-bottom: ${theme.spacing[4]};
  color: ${theme.colors.white};
`;

const CourseDescription = styled.p`
  color: ${theme.colors.primary[200]};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing[6]};
`;

const CourseDetails = styled.div`
  margin-bottom: ${theme.spacing[6]};
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing[2]};

  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailLabel = styled.span`
  color: ${theme.colors.primary[300]};
`;

const DetailValue = styled.span`
  color: ${theme.colors.white};
`;

const CourseFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CoursePrice = styled.span`
  font-size: ${theme.typography.fontSize["2xl"]};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary[300]};
`;

interface CoursesProps {
  courses: Course[];
  onEnrollClick: (courseId: string) => void;
}

export const Courses = ({ courses, onEnrollClick }: CoursesProps) => {
  return (
    <CoursesContainer id="courses">
      <CoursesContent>
        <SectionTitle>Online Courses</SectionTitle>
        <CoursesGrid>
          {courses.map((course) => (
            <CourseCard key={course.id}>
              <CourseTitle>{course.title}</CourseTitle>
              <CourseDescription>{course.description}</CourseDescription>
              <CourseDetails>
                <DetailRow>
                  <DetailLabel>Duration:</DetailLabel>
                  <DetailValue>{course.duration}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>Sessions:</DetailLabel>
                  <DetailValue>{course.sessions}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>Format:</DetailLabel>
                  <DetailValue>{course.format}</DetailValue>
                </DetailRow>
              </CourseDetails>
              <CourseFooter>
                <CoursePrice>{course.price}</CoursePrice>
                <Button onClick={() => onEnrollClick(course.id)}>
                  Enroll Now
                </Button>
              </CourseFooter>
            </CourseCard>
          ))}
        </CoursesGrid>
      </CoursesContent>
    </CoursesContainer>
  );
};
